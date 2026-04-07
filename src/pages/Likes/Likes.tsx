import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import {
  AddCartButton,
  ButtonGroups,
  CancelButton,
  Card,
  CardAmount,
  CardLogo,
  CardReviews,
  CardTitle,
  ConfirmButton,
  Container,
  Description,
  DialogBox,
  DialogContainer,
  DialogTitle,
  Heading,
  NewPrice,
  NoLikesContainer,
  OldPrice,
  RemoveLikeButton,
  ReviewLabel,
  Section,
  StartButton,
  Title,
} from "./likesStyles";
import { useCart } from "../../contexts/CardContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastIcon } from "../ConfirmOrder/confirmOrderStyles";

const Likes = () => {
  const navigate = useNavigate();

  const { wishItems, toggleWish } = useCart();

  const [dialog, setDialog] = useState({
    open: false,
    item: null as any,
  });

  const handleRemove = (item: any) => {
    setDialog({ open: true, item });
  };

  const handleConfirm = () => {
    if (dialog.item) {
      toggleWish(dialog.item);

      toast.success("Removed From Wishlist!", {
        className: "likes-toast",
        icon: <ToastIcon src="/assets/icons/cancelIcon.svg" />,
      });
    }

    setDialog({ open: false, item: null });
  };

  const handleCancel = () => {
    setDialog({ open: false, item: null });
  };

  const handleCardClick = (item: any) => {
    const id = item.id;
    const slug = item.cardName.toLowerCase().replace(/\s+/g, "-");

    navigate(`/product/${id}/${slug}`, {
      state: item,
    });
  };
  return (
    <>
      {wishItems.length != 0 ? (
        <Section>
          <Heading>Likes</Heading>
          <Container>
            {wishItems.map((item: any) => (
              <Card key={item.id} elevation={3}>
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
                <AddCartButton onClick={() => handleCardClick(item)}>
                  Add to Cart
                </AddCartButton>
                <RemoveLikeButton onClick={() => handleRemove(item)}>
                  Remove
                </RemoveLikeButton>
              </Card>
            ))}
          </Container>
        </Section>
      ) : (
        <NoLikesContainer>
          <Title>Your Card is Empty</Title>
          <Description>Go to Home Page and Select your Card</Description>
          <StartButton onClick={() => navigate("/products/Mobiles")}>
            Let's Go
          </StartButton>
        </NoLikesContainer>
      )}
      {dialog.open && (
        <DialogContainer>
          <DialogBox>
            <DialogTitle>Are you sure you want to remove?</DialogTitle>

            <ButtonGroups>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
              <ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
            </ButtonGroups>
          </DialogBox>
        </DialogContainer>
      )}
    </>
  );
};

export default Likes;
