import styled from "styled-components";

export const Section = styled("div")({
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
