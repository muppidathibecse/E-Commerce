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
} from "./confirmOrderStyles";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

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
            <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
            <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
            <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
            <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
            <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
            <ReviewLabel>{product?.cardReview}</ReviewLabel>
          </Reviews>
          <Prices>
            <NewRs>{product?.newRs}</NewRs>
            <OldRs>{product?.oldRs}</OldRs>
          </Prices>
          <Color>
            <ColorName>
              Color <ColorSpan>White</ColorSpan>
            </ColorName>
            <ColorDetails>
              <Box
                sx={{
                  backgroundColor: "black",
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "pink",
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "gray",
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                }}
              ></Box>
            </ColorDetails>
          </Color>
          <Size>
            <SizeName>
              Size <SizeSpan>128GB</SizeSpan>
            </SizeName>{" "}
            <ColorDetails>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #9e9e9e",
                }}
              >
                64
              </Box>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #9e9e9e",
                }}
              >
                128
              </Box>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #9e9e9e",
                }}
              >
                252
              </Box>
            </ColorDetails>
          </Size>
          <ButtonContainer>
            <AddCartButton>Add to Cart</AddCartButton>
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
