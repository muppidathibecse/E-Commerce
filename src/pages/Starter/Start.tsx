import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Start = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F5EEDD",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "95px", fontWeight: 500, color: "#06202b" }}
        >
          Let's Go →
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            sx={{
              fontSize: "18px",
              padding: "10px 30px",
              backgroundColor: "#06202b",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Start
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Start;
