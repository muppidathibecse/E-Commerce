import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled("div")({
  display: "flex",
  justifyContent: "end",
  alignItems: "end",
  gap: "20px",
});

export const SearchInput = styled(TextField)({
  width: "320px",

  "& .MuiOutlinedInput-root": {
    height: "40px",
    borderRadius: "8px",
    fontSize: "16px",
    "& fieldset": {
      borderColor: "#bbbbbb",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#00CACA",
    },
  },
});
export const SearchButton = styled(Button)({
  backgroundColor: "#00CACA",
  fontSize: "16px",
  height: "40px",
  borderRadius: "8px",
  textTransform: "none",
  padding: "0 40px",

  "&:hover": {
    backgroundColor: "#00b2b2",
  },
});
