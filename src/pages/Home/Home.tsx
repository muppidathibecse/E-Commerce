import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const Home = ({ product }: { product: string }) => {
  const navigate = useNavigate();
  const { productSlug } = useParams();
  const [apiResponse, setApiResponse] = useState<ProductItem[]>([]);
  console.log(productSlug);
  const handleCardClick = (item: any) => {
    const id = item.id;
    const slug = item.cardName.toLowerCase().replace(/\s+/g, "-");
    const itemName =
      productSlug
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "";
    const category = API_RESPONSE.find(
      (cat) => cat.productName.toLowerCase() === itemName.toLowerCase(),
    );
    const selectedItem = category?.data.find((prod) => prod.id === id);
    navigate(`/product/${id}/${slug}`, {
      state: selectedItem,
    });
  };

  useEffect(() => {
    const selectedProduct = API_RESPONSE.find(
      (item) => item.productName === product,
    );
    setApiResponse(selectedProduct?.data ?? []);
  }, [product]);

  return (
    <Section>
      <Heading>{product}</Heading>
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
                <StarIcon key={index} sx={{ fontSize: 20, color: "#06202B" }} />
              ))}
              <ReviewLabel>{item.cardReview}</ReviewLabel>
            </CardReviews>
            <CardAmount>
              <NewPrice>{item.newRs}</NewPrice>
              <OldPrice>{item.oldRs}</OldPrice>
            </CardAmount>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Home;
