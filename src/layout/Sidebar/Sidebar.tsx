import { Box } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import {
  Circle,
  LogoIcon,
  NavContainer,
  NavIcon,
  NavItem,
  Section,
} from "./sidebarStyles";
import { BOTTOM_NAV_ITEMS, TOP_NAV_ITEMS } from "../../data/staticData";
import { useCart } from "../../contexts/CardContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type ChildProps = {
  onNavItemClick: (item: any) => void;
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({
  onNavItemClick,
  isCollapsed,
  toggleSidebar,
}: ChildProps) => {
  const navigate = useNavigate();
  const { cartItems, wishItems } = useCart();
  const userName = localStorage.getItem("userName");
  const [openLogout, setOpenLogout] = useState(false);

  const handleClick = (item: any) => {
    onNavItemClick(item);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    toast.success("Logout Successfully!", {
      className: "custom-toast",
    });
  };

  return (
    <Section>
      <Box
        onClick={toggleSidebar}
        sx={{
          cursor: "pointer",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: isCollapsed ? "0px" : "10px",
          fontSize: "24px",
          marginTop: "10px",
          width: "100%",
          paddingBottom: "10px",
          borderBottom: "1px solid white",
        }}
      >
        {!isCollapsed && "E Mall."}

        <LogoIcon
          src="/logo.png"
          alt="logo"
          style={{
            height: "35px",
            width: "35px",
          }}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        {TOP_NAV_ITEMS.map((item) => (
          <NavContainer
            key={item.id}
            collapsed={isCollapsed}
            onClick={() => handleClick(item)}
          >
            <NavIcon src={item.icon} />
            {!isCollapsed && <NavItem>{item.name}</NavItem>}
          </NavContainer>
        ))}
      </Box>

      <Box sx={{ width: "100%", marginTop: "auto" }}>
        {BOTTOM_NAV_ITEMS.map((item) => (
          <NavContainer
            key={item.id}
            collapsed={isCollapsed}
            onClick={() => handleClick(item)}
          >
            <NavIcon src={item.icon} />

            {!isCollapsed && <NavItem>{item.name}</NavItem>}

            {!isCollapsed &&
              item.name === "Order Summary" &&
              cartItems.length !== 0 && <Circle>{cartItems.length}</Circle>}

            {!isCollapsed &&
              item.name === "Likes" &&
              wishItems.length !== 0 && <Circle>{wishItems.length}</Circle>}
          </NavContainer>
        ))}{" "}
        <NavContainer
          collapsed={isCollapsed}
          onClick={() => {
            if (!userName) {
              navigate("/login");
            } else {
              setOpenLogout(true);
            }
          }}
        >
          <NavIcon src="/assets/icons/profile.svg" />
          {!isCollapsed && <NavItem>{userName || "Login"}</NavItem>}
        </NavContainer>
      </Box>
      <Dialog
        open={openLogout}
        onClose={() => setOpenLogout(false)}
        PaperProps={{
          sx: {
            position: "absolute",
            width: "280px",
            left: 10,
            bottom: 20,
            m: 0,
          },
        }}
      >
        <DialogTitle>Logout</DialogTitle>

        <DialogContent>Are you sure?</DialogContent>

        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#06202b",
              borderRadius: "10px",
              padding: "5px 18px",
              color: "white",
              fontWeight: 400,
            }}
            onClick={() => setOpenLogout(false)}
          >
            Cancel
          </Button>

          <Button
            sx={{
              backgroundColor: "#06202b",
              borderRadius: "10px",
              padding: "5px 18px",
              color: "white",
              fontWeight: 400,
            }}
            onClick={() => {
              handleLogout();
              setOpenLogout(false);
              navigate('/login')
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Section>
  );
};

export default Sidebar;
