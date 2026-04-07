import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  display: "flex",
  height: "100vh",
  overflow: "hidden",
});

export const Left = styled("div")({
  flex: 1,
  backgroundColor: "#06202B",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "40px 20px",
});

export const Right = styled("div")({
  flex: 1,
  backgroundColor: "#F5EEDD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LogoImage = styled("img")({
  width: "220px",
  height: "220px",
  borderRadius: "100%",
});