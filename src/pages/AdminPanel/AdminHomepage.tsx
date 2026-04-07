import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Section } from "./addProductStyles";

const AdminHomepage = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleViewProduct = () => {
    navigate("/view-product");
  };

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false");
    navigate("/login");
  };

  return (
    <Section style={{ display: "flex", alignItems: "center" }}>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Admin Panel
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddProduct}
            style={{
              padding: "10px 30px",
              fontSize: "17px",
              backgroundColor: "#06202b",
              color: "white",
            }}
          >
            Add Product
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleViewProduct}
            style={{
              padding: "10px 30px",
              fontSize: "17px",
              backgroundColor: "#06202b",
              color: "white",
            }}
          >
            View Product
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogout}
            style={{
              padding: "10px 30px",
              fontSize: "17px",
              backgroundColor: "#06202b",
              color: "white",
            }}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default AdminHomepage;
