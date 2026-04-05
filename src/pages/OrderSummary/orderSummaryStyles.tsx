import styled from "styled-components";

export const Section = styled("section")({
  padding: "0px 20px",
});

export const Heading = styled("h1")({
  margin: "10px 0px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#06202B",
});

export const OrderLayout = styled("div")({
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "30px",
});
export const OrderContainer = styled("div")({
  display: "flex",
  gap: "40px",
  backgroundColor: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  padding: "25px 25px",
});

export const OrderImage = styled("img")({
  height: "150px",
  width: "150px",
  border: "1px solid #dfdada",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

export const OrderName = styled("h1")({
  margin: 0,
  fontWeight: 600,
  fontSize: "18px",
  color: "#06202B",
});

export const OrderDetails = styled("span")({
  fontWeight: 100,
  color: "#292828",
});

export const OrderQuantity = styled("div")({
  height: "max-content",
  width: "max-content",
  display: "flex",
  padding: "5px 10px",
  backgroundColor: "white",
  alignItems: "center",
  gap: "15px",
  border: "1px solid #a8a5a5",
  borderRadius: "8px",
});

export const QuantityButton = styled("img")({
  height: "18px",
  width: "18px",
  border: "none",
  cursor: "pointer",
});

export const Text = styled("span")({
  fontWeight: 600,
  fontSize: "20px",
  color: "#06202B",
});

export const TrashIcon = styled("img")({
  height: "20px",
  width: "20px",
});
export const OrderRemoveButton = styled("button")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  fontWeight: 500,
  padding: "8px 15px",
  fontSize: "18px",
  color: "red",
  backgroundColor: "white",
  border: "1px solid #fc8585",
  borderRadius: "8px",
  marginTop: "10px",
  cursor: "pointer",
});

export const LikeIcon = styled("img")({
  height: "20px",
  width: "20px",
  cursor: "pointer",
});

export const SaveButton = styled(OrderRemoveButton)({
  width: "max-content",
  marginTop: "0px",
  color: "#06202b",
  borderColor: "#a8a5a5",
});

export const OldPrice = styled("span")({
  marginLeft: "5px",
  color: "#979797",
  fontWeight: "normal",
  textDecoration: "line-through",
});
export const NewPrice = styled("span")({
  color: "#06202B",
  fontWeight: "bold",
});

export const RightContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const OrderButtonGroups = styled("div")({
  display: "flex",
  gap: "10px",
  marginTop: "10px",
});

export const OrderSummaryLayout = styled("div")({
  gridColumn: "1/-1",
  backgroundColor: "white",
  padding: "25px",
  rowGap: "10px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  border: "1px solid #c7c7c7",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
});

export const PriceName = styled("p")({
  margin: 0,
  fontWeight: 400,
  color: "#06202b",
});

export const Price = styled("p")({
  textAlign: "end",
  margin: 0,
  fontWeight: 400,
  color: "#06202b",
});

export const Title = styled("p")({
  margin: 0,
  fontSize: "26px",
  fontWeight: 600,
  color: "#06202b",
  gridColumn: "1/-1",
});

export const AmountPayable = styled("p")({
  margin: 0,
  fontSize: "22px",
  fontWeight: 600,
  color: "#06202b",
});

export const Amount = styled("p")({
  margin: 0,
  textAlign: "end",
  fontSize: "22px",
  fontWeight: 600,
  color: "#06202b",
});

export const FreeText = styled("span")({
  color: "green",
  fontWeight: 400,
  marginRight: "8px",
});

export const OldDeliveryPrice = styled("span")({
  color: "#000000",
});

export const PlaceOrderButtons = styled("div")({
  marginTop: "25px",
  display: "flex",
  gap: "10px",
  justifyContent: "start",
});

export const PlaceOrderButton = styled("button")({
  minWidth: "250px",
  border: "1px solid #06202b",
  backgroundColor: "#06202b",
  color: "white",
  borderRadius: "10px",
  fontWeight: 200,
  fontSize: "18px",
  padding: "15px 25px",
  cursor: "pointer",
});

export const CancelOrderButton = styled("button")({
  minWidth: "250px",
  border: "1px solid #06202b",
  backgroundColor: "white",
  color: "#06202b",
  borderRadius: "10px",
  fontWeight: 200,
  fontSize: "18px",
  padding: "15px 25px",
  cursor: "pointer",
});

export const DialogContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(49, 49, 49, 0.5)",
  display: "flex",
  alignItems: "start",
  justifyContent: "end",
});

export const DialogBox = styled("div")({
  width: "300px",
  background: "#fff",
  borderRadius: "10px",
  padding: "20px",
  margin: "20px",
});

export const DialogTitle = styled("p")({
  margin: 0,
  padding: 0,
  fontSize: "16px",
  textAlign:'end'
});

export const ConfirmButton = styled("button")({
  border: "1px solid #06202b",
  backgroundColor: "#06202b",
  color: "white",
  borderRadius: "10px",
  fontWeight: 200,
  fontSize: "15px",
  padding: "8px 20px",
  cursor: "pointer",
});

export const CancelButton = styled("button")({

  border: "1px solid #06202b",
  backgroundColor: "white",
  color: "#06202b",
  borderRadius: "10px",
  fontWeight: 200,
  fontSize: "15px",
  padding: "8px 20px",
  cursor: "pointer",
});

export const ButtonGroups = styled("div")({
  marginTop:'10px',
  display: "flex",
  gap:'10px',
  justifyContent:'end'
});

export const ToastIcon = styled("img")({
  height: "25px",
  width: "25px",
});