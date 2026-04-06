import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import {
  Card,
  CardAmount,
  CardLogo,
  CardReviews,
  CardTitle,
  Container,
  Heading,
  NewPrice,
  OldPrice,
  ReviewLabel,
  Section,
} from "./homeStyle";
import type { ProductItem } from "../../types/productCardTypes";
import { API_RESPONSE } from "../../data/staticData";
import { Box } from "@mui/material";

const Home = ({ product }: { product: string }) => {
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState<ProductItem[]>([]);
  const handleCardClick = (item: any) => {
    const id = item.id;
    const slug = item.cardName.toLowerCase().replace(/\s+/g, "-");

    navigate(`/product/${id}/${slug}`, {
      state: item,
    });
  };

  useEffect(() => {
    const selectedProduct = API_RESPONSE.find(
      (item) => item.productName === product,
    );
    setApiResponse(selectedProduct?.data ?? []);
  }, [product]);

  return (
    <>
      <Box sx={{ backgroundColor: "red" }}>
        <Heading
          style={{
            position: "fixed",
            top: "-10px",
            width:'75%',
            backgroundColor: "#F5EEDD",
            zIndex: 1000,
          }}
        >
          {product}
        </Heading>
      </Box>
      <Section style={{marginTop:'60px'}}>
        <Container>
          {apiResponse.map((item: any) => (
            <Card
              key={item.id}
              elevation={3}
              onClick={() => handleCardClick(item)}
            >
              <CardLogo src={item.cardImage}></CardLogo>
              <CardTitle>{item.cardName}</CardTitle>
              <CardReviews>
                {[...Array(item.noOfStar)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{ fontSize: 20, color: "#06202B" }}
                  />
                ))}
                <ReviewLabel>{item.cardReview}</ReviewLabel>
              </CardReviews>
              <CardAmount>
                <NewPrice>₹{item.newRs}</NewPrice>
                <OldPrice>₹{item.oldRs}</OldPrice>
              </CardAmount>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default Home;
