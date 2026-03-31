import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Home from "../pages/Home/Home";
import ConfirmOrder from "../pages/ConfirmOrder/ConfirmOrder";

const LayoutWrapper = styled("div")({
  display: "flex",
});

const SidebarWrapper = styled("div")({
  backgroundColor: "#1b2561",
  width: "260px",
  height: "100vh",
  position: "fixed",
});

const Main = styled("div")({
  backgroundColor: "#f0e8e8",
  paddingBottom: "20px",
  minHeight: "100vh",
  marginLeft: "260px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Content = styled("div")({});

const Layout = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string>("Combo Offers");

  const handleNavItem = (item: string) => {
    setSelectedItem(item);
    const slug = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/product/${slug}`);
  };

  return (
    <LayoutWrapper>
      
      <SidebarWrapper>
        <Sidebar onNavItemClick={handleNavItem} />
      </SidebarWrapper>

      <Main>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home product={selectedItem} />} />
            <Route
              path="/product/:productSlug"
              element={<Home product={selectedItem} />}
            />
            <Route path="/product/:id/:slug" element={<ConfirmOrder />} />
          </Routes>
        </Content>
      </Main>
      
    </LayoutWrapper>
  );
};

export default Layout;
