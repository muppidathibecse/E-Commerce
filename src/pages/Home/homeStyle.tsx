import { Paper } from "@mui/material";
import styled from "styled-components";

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
  borderRadius: "15px !important",
});

export const CardLogo = styled("img")({
  height: "275px",
  width: "255px",
  borderRadius: "15px",
});

export const CardTitle = styled("p")({
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
  color: "black",
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
  color: "black",
});
