import { useEffect, useState } from "react";
import ProductTables from "./ProductTables";
import { getAllProductData } from "../../services/produtServices";
import { BackButton, Container, Title } from "./addProductStyles";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProductData();
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container style={{ backgroundColor: "#F5EEDD"}}>
        <Title>All Products</Title>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          ← Back
        </BackButton>
      </Container>
      <ProductTables data={data} />
    </>
  );
};

export default ViewProduct;
