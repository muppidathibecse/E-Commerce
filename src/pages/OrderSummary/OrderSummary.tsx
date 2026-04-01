import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CardContext";
import {
  Amount,
  AmountPayable,
  CancelOrderButton,
  FreeText,
  Heading,
  LikeIcon,
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
  SaveButton,
  Section,
  Text,
  Title,
  TrashIcon,
} from "./orderSummaryStyles";
import EmptyUI from "../EmptyUI/EmptyUI";

type PaymentTypes = {
  bagTotal: number;
  bagSavings: number;
  couponSavings: number;
  deliveryFee: number;
  totalAmount: number;
};

const OrderSummary = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [amountDetails, setAmountDetails] = useState<PaymentTypes>({
    bagTotal: 0,
    bagSavings: 0,
    couponSavings: 0,
    deliveryFee: 0,
    totalAmount: 0,
  });

  const Calculate = () => {
    console.log("FromC", cartItems);

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
    removeFromCart(id);
    Calculate();
    console.log("cardtItems", cartItems);
  };

  const Increment = (id: number, count: number) => {
    updateQuantity(id, count);
    Calculate();
    console.log("cardtItems", cartItems);
  };

  const Decrement = (id: number, count: number) => {
    updateQuantity(id, count);
    Calculate();
    console.log("cardtItems", cartItems);
  };

  const handleApplyCoupon = () => {
    const discount = 2;
    setAmountDetails((prev) => ({
      ...prev,
      couponSavings: discount,
      totalAmount: prev.totalAmount - discount,
    }));
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
                    Color: {item.selectedColor}, Size: {item.selectedSize} GB
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
                    <SaveButton>
                      <LikeIcon src="/assets/icons/redColoredIcon.svg" /> Save
                    </SaveButton>
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
                  color: amountDetails.couponSavings === 0 ? "blue" : "black",
                  cursor:
                    amountDetails.couponSavings === 0 ? "pointer" : "default",
                }}
              >
                {amountDetails.couponSavings === 0
                  ? "Apply Coupon"
                  : `-₹${amountDetails.couponSavings}`}
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
            <CancelOrderButton onClick={clearCart}>
              Cancel Order
            </CancelOrderButton>
            <PlaceOrderButton>Place Order</PlaceOrderButton>
          </PlaceOrderButtons>
        </Section>
      )}
    </>
  );
};

export default OrderSummary;
