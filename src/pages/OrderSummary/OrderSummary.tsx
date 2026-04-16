import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CardContext";
import {
  Amount,
  AmountPayable,
  ButtonGroups,
  CancelButton,
  CancelOrderButton,
  ConfirmButton,
  DialogBox,
  DialogContainer,
  DialogTitle,
  FreeText,
  Heading,
  NewPrice,
  OldDeliveryPrice,
  OldPrice,
  OrderButtonGroups,
  OrderContainer,
  OrderDetails,
  OrderImage,
  OrderLayout,
  OrderName,
  OrderQuantity,
  OrderRemoveButton,
  OrderSummaryLayout,
  PlaceOrderButton,
  PlaceOrderButtons,
  Price,
  PriceName,
  QuantityButton,
  RightContainer,
  Section,
  Text,
  Title,
  ToastIcon,
  TrashIcon,
} from "./orderSummaryStyles";
import EmptyUI from "../EmptyUI/EmptyUI";
import { toast } from "react-toastify";

type PaymentTypes = {
  bagTotal: number;
  bagSavings: number;
  couponSavings: number;
  deliveryFee: number;
  totalAmount: number;
};

const OrderSummary = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [amountDetails, setAmountDetails] = useState<PaymentTypes>({
    bagTotal: 0,
    bagSavings: 0,
    couponSavings: 0,
    deliveryFee: 0,
    totalAmount: 0,
  });
  const [dialog, setDialog] = useState({
    open: false,
    id: null as number | null,
  });

  const Calculate = () => {
    setAmountDetails((prev) => {
      const couponSavings = prev.couponSavings;

      const bagTotal = cartItems.reduce((acc, item) => {
        return acc + item.numberOfProducts * item.oldRs;
      }, 0);

      const totalAmounts = cartItems.reduce((acc, item) => {
        return acc + item.numberOfProducts * item.newRs;
      }, 0);

      const deliveryFee = totalAmounts >= 101 ? 0 : 99;

      const bagSavings = bagTotal - totalAmounts;

      const totalAmount = totalAmounts - couponSavings + deliveryFee;

      return {
        bagTotal,
        bagSavings,
        couponSavings,
        deliveryFee,
        totalAmount,
      };
    });
  };

  const handleRemove = (id: number) => {
    setDialog({ open: true, id });
  };

  const handleConfirm = () => {
    if (dialog.id !== null) {
      removeFromCart(dialog.id);
      toast.success("Removed From Card!", {
        className: "likes-toast",
        icon: <ToastIcon src="/assets/icons/cancelIcon.svg"></ToastIcon>,
      });
      Calculate();
    }

    setDialog({ open: false, id: null });
  };

  const handleCancel = () => {
    setDialog({ open: false, id: null });
  };

  const Increment = (id: number, count: number) => {
    updateQuantity(id, count);
    Calculate();
  };

  const Decrement = (id: number, count: number) => {
    updateQuantity(id, count);
    Calculate();
  };

  const handleApplyCoupon = () => {
    const discount = 72;
    setAmountDetails((prev) => ({
      ...prev,
      couponSavings: discount,
      totalAmount: prev.totalAmount - discount,
    }));
    toast.success("Coupon Applied!", {
      className: "likes-toast",
    });
  };

  const handleCancelOrderClick1 = () => {
    setActionType("cancel");
    setDialogOpen(true);
  };

  const handlePlaceOrderClick1 = () => {
    setActionType("place");
    setDialogOpen(true);
  };

  const handleConfirm1 = () => {
    if (actionType === "cancel") {
      clearCart();
    } else if (actionType === "place") {
      toast.success("Order Placed Successfully!", {
        className: "likes-toast",
      });
      clearCart();
    }

    setDialogOpen(false);
  };

  const handleCancel1 = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    Calculate();
  }, [cartItems]);

  return (
    <>
      {cartItems.length == 0 ? (
        <>
          <EmptyUI />
        </>
      ) : (
        <Section>
          <Heading>Order Summary</Heading>
          <OrderLayout>
            {cartItems.map((item: any, index: number) => (
              <OrderContainer key={index}>
                <OrderImage src={item.cardImage}></OrderImage>
                <RightContainer>
                  <OrderName>{item.cardName}</OrderName>
                  <OrderDetails>
                    Color: {item.selectedColor}, Size: {item.selectedSize} 
                  </OrderDetails>
                  <NewPrice>
                    ₹{item.newRs} <OldPrice>₹{item.oldRs}</OldPrice>
                  </NewPrice>
                  <OrderButtonGroups>
                    <OrderQuantity>
                      <QuantityButton
                        onClick={() =>
                          Decrement(item.orderId, item.numberOfProducts - 1)
                        }
                        src="/assets/icons/minusBoldIcon.svg"
                      />
                      <Text>{item.numberOfProducts}</Text>
                      <QuantityButton
                        onClick={() =>
                          Increment(item.orderId, item.numberOfProducts + 1)
                        }
                        src="/assets/icons/plusBoldIcon.svg"
                      />
                    </OrderQuantity>
                    
                  </OrderButtonGroups>
                  <OrderRemoveButton onClick={() => handleRemove(item.orderId)}>
                    <TrashIcon src="/assets/icons/trashIcon.svg" /> Remove
                  </OrderRemoveButton>
                </RightContainer>
              </OrderContainer>
            ))}
            <OrderSummaryLayout>
              <Title>Order Details</Title>
              <PriceName>Bag Total</PriceName>
              <Price>₹{amountDetails.bagTotal}</Price>
              <PriceName>Bag Savings</PriceName>
              <Price>-₹{amountDetails.bagSavings}</Price>
              <PriceName>Coupon Savings</PriceName>
              <Price
                onClick={() => {
                  if (amountDetails.couponSavings === 0) {
                    handleApplyCoupon();
                  }
                }}
                style={{
                  color: amountDetails.couponSavings === 0 ? "blue" : "green",
                  cursor:
                    amountDetails.couponSavings === 0 ? "pointer" : "default",
                }}
              >
                {amountDetails.couponSavings === 0
                  ? "Apply Coupon"
                  : `${amountDetails.couponSavings}%`}
              </Price>
              <PriceName>Delivery Fee</PriceName>
              <Price>
                {amountDetails.deliveryFee === 99 ? (
                  <OldDeliveryPrice>
                    +₹{amountDetails.deliveryFee}
                  </OldDeliveryPrice>
                ) : (
                  <>
                    <FreeText>Free</FreeText>
                    <OldDeliveryPrice
                      style={{
                        color: "#ff4d4f",
                        textDecoration: "line-through",
                        marginLeft: "5px",
                      }}
                    >
                      ₹{amountDetails.deliveryFee}
                    </OldDeliveryPrice>
                  </>
                )}
              </Price>
              <AmountPayable>Amount Payable</AmountPayable>
              <Amount>₹{amountDetails.totalAmount}</Amount>
            </OrderSummaryLayout>
          </OrderLayout>

          <PlaceOrderButtons>
            <CancelOrderButton onClick={handleCancelOrderClick1}>
              Cancel Cart
            </CancelOrderButton>

            <PlaceOrderButton onClick={handlePlaceOrderClick1}>
              Place Order
            </PlaceOrderButton>
          </PlaceOrderButtons>
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
          {dialogOpen && (
            <DialogContainer>
              <DialogBox>
                <DialogTitle>
                  {actionType === "cancel"
                    ? "Are you sure you want to cancel the order?"
                    : "Are you sure you want to place the order?"}
                </DialogTitle>

                <ButtonGroups>
                  <CancelButton onClick={handleCancel1}>Cancel</CancelButton>

                  <ConfirmButton onClick={handleConfirm1}>OK</ConfirmButton>
                </ButtonGroups>
              </DialogBox>
            </DialogContainer>
          )}
        </Section>
      )}
    </>
  );
};

export default OrderSummary;
