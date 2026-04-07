import styled from "styled-components";
export const Section = styled("div")({
  backgroundColor: "#F5EEDD",
  minHeight: "100vh",
});
export const Input = styled("input")({
  padding: "15px 10px",
  border: "1px solid #7c7c7c",
  borderRadius: "5px",
  fontSize: "15px",
  outline: "none",

  "&:focus": {
    border: "1px solid #06202b",
  },
});

export const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "10px",
  gap: "30px",
});

export const ButtonContainer = styled("div")({
  gridColumn: "1/-1",
  display: "flex",
  justifyContent: "end",
  gap: "20px",
});

export const Title = styled("h1")({
  textAlign: "center",
  color: "#06202b",
  gridColumn: "1/-1",
  margin: 0,
  padding: 0,
  fontSize: "25px",
  fontWeight: 600,
});
