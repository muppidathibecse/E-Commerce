import { Box, Button, TextField, Typography } from "@mui/material";
import { Left, LogoImage, Right, Section } from "./loginStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loginType, setLoginType] = useState<"user" | "admin">("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginType === "admin") {
      if (username === "abc" && password == "abc") {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        localStorage.setItem("isAdmin", "false");
        toast.error("Invalid Account!", {
          className: "likes-toast",
        });
      }
    } else {
      localStorage.setItem("isAdmin", "false");
      localStorage.setItem("userName", username);
      console.log("sajsja", loginType, " ", username, " ", password);
      toast.success("Logged In Successfully!", {
        className: "custom-toast",
      });
      navigate("/products/order-summary");
    }
  };

  return (
    <Section>
      <Left>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <LogoImage src="/LoginLogo.png" alt="logo" />
          <Typography variant="h4">E Mall</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            variant="contained"
            onClick={() => (
              setUsername(""),
              setPassword(""),
              setLoginType("user")
            )}
            sx={{
              backgroundColor: loginType === "user" ? "#F5EEDD" : "#303030",
              color: "#06202B",
              fontWeight: "bold",
              padding: "10px 30px",
            }}
          >
            Users
          </Button>

          <Button
            variant="contained"
            onClick={() => (
              setUsername(""),
              setPassword(""),
              setLoginType("admin")
            )}
            sx={{
              backgroundColor: loginType === "admin" ? "#F5EEDD" : "#303030",
              color: "#06202B",
              fontWeight: "bold",
              padding: "10px 30px",
            }}
          >
            Admin
          </Button>
        </Box>
      </Left>
      <Right>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h4" textAlign="center">
            {loginType === "admin" ? "Admin Login" : "User Login"}
          </Typography>

          <TextField
            label={loginType === "admin" ? "Admin Name" : "Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#06202b",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#06202b",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#06202b",
              },
            }}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#06202b",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#06202b",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#06202b",
              },
            }}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: "#06202B",
              padding: "10px",
            }}
          >
            Login
          </Button>
        </Box>
      </Right>
    </Section>
  );
};

export default LoginPage;
