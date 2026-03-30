import { Paper } from "@mui/material";
import styled from "styled-components";

export const Section = styled("section")({
  padding: "20px 0px",
});

export const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
  gap: "20px",
});

export const Card = styled(Paper)({
  width: "210px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",  
  borderRadius: "15px !important",
});

export const CardLogo = styled("img")({
  height: "220px",
  width: "200px",
  borderRadius: "15px",
});

export const CardTitle = styled("p")({
  fontWeight: "bold",
  fontSize: "18px",
  margin: "0px 0px",
});

export const CardReviews = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "between",
  gap: 3,
});

interface SpanProps {
  ml?: string;
  color?: string;
  bold?: boolean;
  lineThrough?: boolean;
}

export const Span = styled("span")<SpanProps>(
  ({ ml, color, bold, lineThrough }) => ({
    marginLeft: ml || "0px",
    color: color || "#000",
    fontWeight: bold ? "bold" : "normal",
    textDecoration: lineThrough ? "line-through" : "none",
  }),
);

export const CardAmount = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "between",
  gap: 3,
});
