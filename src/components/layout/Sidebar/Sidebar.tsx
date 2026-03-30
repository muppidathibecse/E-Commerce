import { Box } from "@mui/material";
import {
  Logo,
  LogoName,
  NavContainer,
  NavIcon,
  NavItem,
  Section,
} from "./sidebarStyles";
import { NAV_ITEMS } from "../../../data/staticData";

const Sidebar = () => {
  return (
    <Section>
      {/* <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap:'20px' }}
      >
        <Logo src="./assets/logo/Logo.jpg"></Logo>
        <LogoName>e Shop</LogoName>
      </Box> */}
      <Box>
        {NAV_ITEMS.map((item) => (
          <NavContainer key={item.id}>
            <NavIcon src={item.icon}></NavIcon>
            <NavItem>{item.name}</NavItem>
          </NavContainer>
        ))}
      </Box>
    </Section>
  );
};

export default Sidebar;
