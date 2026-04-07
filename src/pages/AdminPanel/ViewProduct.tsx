import { useEffect, useState } from "react";
import ProductTables from "./ProductTables";
import { getAllProductData } from "../../services/produtServices";

const ViewProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProductData();
      setData(res);
    };

    fetchData();
  }, []);

  return <ProductTables data={data} />;
};

export default ViewProduct;