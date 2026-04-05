import { Box } from "@mui/material";

import {
  Circle,
  NavContainer,
  NavIcon,
  NavItem,
  Section,
} from "./sidebarStyles";
import { BOTTOM_NAV_ITEMS, TOP_NAV_ITEMS } from "../../data/staticData";
import { useCart } from "../../contexts/CardContext";

type ChildProps = {
  onNavItemClick: (item: any) => void;
};

const Sidebar = ({ onNavItemClick }: ChildProps) => {
  const { cartItems, wishItems } = useCart();

  const handleClick = (item: any) => {
    onNavItemClick(item);
  };

  return (
    <Section>
      <Box>
        {TOP_NAV_ITEMS.map((item) => (
          <NavContainer key={item.id}>
            <NavIcon src={item.icon}></NavIcon>
            <NavItem onClick={() => handleClick(item)}>{item.name}</NavItem>
          </NavContainer>
        ))}
      </Box>
      <Box>
        {BOTTOM_NAV_ITEMS.map((item) => (
          <NavContainer key={item.id}>
            <NavIcon src={item.icon}></NavIcon>
            <NavItem onClick={() => handleClick(item)}>{item.name}</NavItem>
            {item.name === "Order Summary" && cartItems.length != 0 && (
              <Circle>{cartItems.length}</Circle>
            )}
            {item.name === "Likes" && wishItems.length != 0 && (
              <Circle>{wishItems.length}</Circle>
            )}
          </NavContainer>
        ))}
      </Box>
    </Section>
  );
};

export default Sidebar;
