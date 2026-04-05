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
  ToastIcon,
} from "./confirmOrderStyles";
import { useState } from "react";
import { useCart } from "../../contexts/CardContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const [selectedSize, setSelctedSize] = useState<number>(product?.defaultSize);
  const { addToCart } = useCart();
  const { wishItems, toggleWish } = useCart();
  const isLiked = wishItems.some((item) => item.id === product.id);
  const [selectedColor, setSelctedColor] = useState<string>(
    product?.defaultColorName,
  );
  const [selectedColorCode, setSelctedColorCode] = useState<string>(
    product?.defaultColorCode,
  );

  const handleOrder = () => {
    const newCardData = {
      ...product,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
    };
    addToCart(newCardData);

    toast.success("Added to cart!", {
      className: "custom-toast",
    });
  };

  const handleToggle = (product: any, isLiked: boolean) => {
    toggleWish(product);
    if (!isLiked) {
      toast.success("Added to Likes!", {
        className: "likes-toast",
        icon: <ToastIcon src="/assets/icons/redColoredIcon.svg"></ToastIcon>,
      });
    } else {
      toast.success("Removed from Likes!", {
        className: "likes-toast",
        icon: <ToastIcon src="/assets/icons/heart.svg"></ToastIcon>,
      });
    }
  };
  return (
    <Section>
      {" "}
      <ToastContainer />
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
                    border:
                      item.colorCode === selectedColorCode
                        ? "2px solid black"
                        : "2px solid #ffff",
                    transition: "all 0.2s ease",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    (setSelctedColor(item.colorName),
                      setSelctedColorCode(item.colorCode));
                  }}
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
                    cursor: "pointer",
                    color: s === selectedSize ? "black" : "#9e9e9e",
                    border:
                      s === selectedSize
                        ? "1px solid black"
                        : "1px solid #9e9e9e",
                    transition: "all 0.2s ease",
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
              <HeartIcon
                src={
                  isLiked
                    ? "/assets/icons/redColoredIcon.svg"
                    : "/assets/icons/heart.svg"
                }
                onClick={() => {
                  handleToggle(product, isLiked);
                }}
              ></HeartIcon>
            </LikeButton>
          </ButtonContainer>
          <BackButton onClick={() => navigate(-1)}>⬅ Back</BackButton>
        </RightContainer>
      </Container>
    </Section>
  );
};

export default ConfirmOrder;
