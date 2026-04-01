import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  padding: "10px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "10px",
});

export const NavContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  borderRadius: "10px",
});

export const NavIcon = styled("img")({
  height: "20px",
  width: "20px",
});

export const Logo = styled("img")({
  borderRadius: "100%",
  height: "50px",
  width: "50px",
});

export const NavItem = styled("p")({
  color: "#F5EEDD",
  fontSize: "20px",
  cursor: "pointer",
});

export const LogoName = styled("p")({
  color: "white",
  fontSize: "26px",
  fontWeight: "bold",
});
