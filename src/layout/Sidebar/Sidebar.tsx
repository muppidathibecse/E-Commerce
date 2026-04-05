import { Box } from "@mui/material";

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
  const { cartItems, wishItems } = useCart();

  const handleClick = (item: any) => {
    onNavItemClick(item);
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

      <Box sx={{ width: "100%" }}>
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
        ))}
      </Box>
    </Section>
  );
};

export default Sidebar;
