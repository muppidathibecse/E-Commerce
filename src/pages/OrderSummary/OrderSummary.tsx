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

const DATA = [1, 2, 3, 4];

const OrderSummary = () => {
  return (
    <Section>
      <Heading>Order Summary</Heading>
      <OrderLayout>
        {DATA.map((item) => (
          <OrderContainer key={item}>
            <OrderImage src="/assets/productIcons/mobile-1.jpg"></OrderImage>
            <RightContainer>
              <OrderName>iPhone 15 Pro Max</OrderName>
              <OrderDetails>Color: White, Size: 256GB</OrderDetails>
              <NewPrice>
                ₹89,000 <OldPrice>₹99,900</OldPrice>
              </NewPrice>
              <OrderButtonGroups>
                <OrderQuantity>
                  <QuantityButton src="/assets/icons/minusBoldIcon.svg" />
                  <Text>7</Text>
                  <QuantityButton src="/assets/icons/plusBoldIcon.svg" />
                </OrderQuantity>
                <SaveButton>
                  <LikeIcon src="/assets/icons/redColoredIcon.svg" /> Save
                </SaveButton>
              </OrderButtonGroups>
              <OrderRemoveButton>
                <TrashIcon src="/assets/icons/trashIcon.svg" /> Remove
              </OrderRemoveButton>
            </RightContainer>
          </OrderContainer>
        ))}{" "}
        <OrderSummaryLayout>
          <Title>Order Details</Title>
          <PriceName>Bag Total</PriceName>
          <Price>₹89,000.00</Price>
          <PriceName>Bag Savings</PriceName>
          <Price>-₹19,000.00</Price>
          <PriceName>Coupon Savings</PriceName>
          <Price>Apply Coupon</Price>
          <PriceName>Delivery Fee</PriceName>
          <Price>
            <FreeText>Free</FreeText>
            <OldDeliveryPrice>₹99.00</OldDeliveryPrice>
          </Price>
          <AmountPayable>Amount Payable</AmountPayable>
          <Amount>₹89,000</Amount>
        </OrderSummaryLayout>
      </OrderLayout>

      <PlaceOrderButtons>
        <CancelOrderButton>Cancel Order</CancelOrderButton>
        <PlaceOrderButton>Place Order</PlaceOrderButton>
      </PlaceOrderButtons>
    </Section>
  );
};

export default OrderSummary;
