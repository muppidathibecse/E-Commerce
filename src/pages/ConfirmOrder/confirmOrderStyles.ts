import styled from "styled-components";

export const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginTop: "20px",
  gap: "30px",
});

export const Container = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  gap: "30px",
});

export const LeftContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const CardImage = styled("img")({
  borderRadius: "20px",
  height: "400px",
  width: "400px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

export const RightContainer = styled("div")({
  width: "450px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const Details = styled("div")({
  display: "flex",
});

export const Title = styled("h1")({
  fontWeight: "bold",
  color: "#06202B",
  fontSize: "24px",
  margin: 0,
  padding: "0px 0px",
});

export const Reviews = styled("div")({
  display: "flex",
  justifyContent: "between",
  gap: 3,
});

export const ReviewLabel = styled("span")({
  marginLeft: "5px",
  color: "#979797",
  fontWeight: "normal",
});

export const Prices = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "between",
  gap: 3,
});

export const NewRs = styled("span")({
  color: "#06202B",
  fontWeight: "bold",
  fontSize: "27px",
});

export const OldRs = styled("span")({
  marginLeft: "5px",
  color: "#979797",
  fontWeight: "normal",
  textDecoration: "line-through",
});

export const Color = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "between",
  gap: "10px",
});

export const ColorName = styled("span")({
  fontWeight: 500,
});

export const ColorSpan = styled("span")({
  fontWeight: 200,
  color: "#2e2c2c",
});

export const ColorDetails = styled("div")({
  display: "flex",
  gap: "10px",
});

export const Size = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "between",
  gap: "10px",
});

export const SizeName = styled("span")({
  fontWeight: 500,
});

export const SizeSpan = styled("span")({
  fontWeight: 200,
  color: "#1d1c1c",
});

export const ButtonContainer = styled("div")({
  display: "flex",
  marginTop: "20px",
  gap: "15px",
});

export const AddCartButton = styled("button")({
  width: "100%",
  backgroundColor: "#06202B",
  fontWeight: 300,
  fontSize: "18px",
  color: "white",
  padding: "12px 15px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
});

export const LikeButton = styled("button")({
  height: "45px",
  width: "45px",
  padding: "5px",
  borderRadius: "10px",
  backgroundColor: "white",
  border: "1px solid #06202B",
  cursor: "pointer",
});

export const HeartIcon = styled("img")({
  height: "30px",
  width: "30px",
});

export const ToastIcon = styled("img")({
  height: "25px",
  width: "25px",
});

export const BackButton = styled("button")({
  fontWeight: 400,
  backgroundColor: "#ecece7",
  border: "1px solid #06202B",
  fontSize: "18px",
  color: "#06202B",
  padding: "8px 15px",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "10px",
});

export const MustFill = styled("span")({
  color: "red",
});
