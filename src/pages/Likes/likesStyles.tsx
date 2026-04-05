import styled from "styled-components";

import { Paper } from "@mui/material";

export const NoLikesContainer = styled("div")({
  display: "flex",
  marginTop: "100px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const Title = styled("p")({
  margin: 0,
  fontWeight: 600,
  fontSize: "36px",
  color: "#06202b",
});

export const Description = styled("p")({
  margin: 0,
  fontWeight: 300,
  fontSize: "18px",
  color: "#06202b",
});

export const StartButton = styled("button")({
  backgroundColor: "#06202b",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontWeight: 300,
  fontSize: "18px",
  borderRadius: "10px",
  cursor: "pointer",
});

export const Section = styled("section")({});

export const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 300px)",
  gap: "50px",
  justifyContent: "center",
});

export const Card = styled(Paper)({
  width: "260px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: "10px",
  cursor: "pointer",
  backgroundColor: "#f3f1ec !important",
  borderRadius: "5px !important",
});

export const CardLogo = styled("img")({
  height: "275px",
  width: "255px",
  borderRadius: "15px",
});

export const CardTitle = styled("p")({
  margin: 0,
  color: "#06202B",
  fontWeight: "bold",
  fontSize: "18px",
});

export const CardReviews = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "between",
  gap: 3,
});

export const ReviewLabel = styled("span")({
  marginLeft: "5px",
  color: "#979797",
  fontWeight: "normal",
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

export const CardAmount = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "between",
  gap: 3,
});

export const Heading = styled("h1")({
  margin: "10px 0px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#06202B",
});

export const RemoveLikeButton = styled("button")({
  width: "100%",
  border: "1px solid #06202b",
  borderRadius: "10px",
  padding: "10px 0px",
  fontSize: "18px",
  fontWeight: 200,
  cursor: "pointer",
});

export const AddCartButton = styled("button")({
  width: "100%",
  border: "1px solid #06202b",
  backgroundColor: "#06202b",
  color: "white",
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
