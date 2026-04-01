import { useLocation, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

import {
  AddCartButton,
  BackButton,
  Color,
  ColorDetails,
  ColorName,
  ColorSpan,
  Details,
  NewRs,
  OldRs,
  Prices,
  RightContainer,
  ReviewLabel,
  Reviews,
  Size,
  SizeName,
  SizeSpan,
  Title,
  LeftContainer,
  CardImage,
  Container,
  LikeButton,
  HeartIcon,
  ButtonContainer,
  Section,
  MustFill,
} from "./confirmOrderStyles";
import { useState } from "react";
import { useCart } from "../../contexts/CardContext";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const [selectedColor, setSelctedColor] = useState<string>("");
  const [selectedSize, setSelctedSize] = useState<number>(0);
  const { addToCart, cartItems } = useCart();

  const handleOrder = () => {
    console.log("Added", product);
    const newCardData = {
      ...product,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
    };
    console.log("ADDED", newCardData);
    addToCart(newCardData);

    console.log("Cart Items", cartItems);
    alert("Added");
  };
  return (
    <Section>
      <Container>
        <LeftContainer>
          <CardImage src={product?.cardImage}></CardImage>
        </LeftContainer>
        <RightContainer>
          <Details>
            <Title>{product?.cardName}</Title>
          </Details>
          <Reviews>
            {[...Array(product.noOfStar)].map((_, index) => (
              <StarIcon key={index} sx={{ fontSize: 20, color: "#06202B" }} />
            ))}
            <ReviewLabel>{product?.cardReview}</ReviewLabel>
          </Reviews>
          <Prices>
            <NewRs>₹{product?.newRs}</NewRs>
            <OldRs>₹{product?.oldRs}</OldRs>
          </Prices>
          <Color>
            <ColorName>
              Color{" "}
              <ColorSpan>
                <MustFill>*</MustFill> {selectedColor}{" "}
              </ColorSpan>
            </ColorName>
            <ColorDetails>
              {product?.colors.map((item: any, index: number) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: item.colorCode,
                    height: "40px",
                    width: "40px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelctedColor(item.colorName)}
                ></Box>
              ))}
            </ColorDetails>
          </Color>
          <Size>
            <SizeName>
              Size{" "}
              <SizeSpan>
                <MustFill>*</MustFill> {selectedSize} GB
              </SizeSpan>
            </SizeName>
            <ColorDetails>
              {product?.sizes.map((s: number) => (
                <Box
                  key={s}
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #9e9e9e",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelctedSize(s)}
                >
                  {s}
                </Box>
              ))}
            </ColorDetails>
          </Size>
          <ButtonContainer>
            <AddCartButton onClick={handleOrder}>Add to Cart</AddCartButton>
            <LikeButton>
              <HeartIcon src="/assets/icons/redColoredIcon.svg"></HeartIcon>
            </LikeButton>
          </ButtonContainer>
          <BackButton onClick={() => navigate(-1)}>⬅ Back</BackButton>
        </RightContainer>
      </Container>
    </Section>
  );
};

export default ConfirmOrder;
