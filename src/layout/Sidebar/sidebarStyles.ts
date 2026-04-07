import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  padding: "0px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});

export const NavContainer = styled("div")<{ collapsed?: boolean }>(
  ({ collapsed }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: collapsed ? "center" : "flex-start",
    gap: "10px",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  }),
);

export const NavIcon = styled("img")({
  height: "20px",
  width: "20px",
});

export const LogoIcon = styled("img")({
  height: "50px",
  width: "50px",
  borderRadius:'10px'
});

export const NavItem = styled("p")({
  color: "white",
  fontSize: "18px",
});

export const Circle = styled("div")({
  backgroundColor: "red",
  color: "white",
  borderRadius: "50%",
  height: "25px",
  width: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
});
