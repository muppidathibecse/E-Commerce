import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Home from "../pages/Home/Home";
import ConfirmOrder from "../pages/ConfirmOrder/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary/OrderSummary";

const LayoutWrapper = styled("div")({
  display: "flex",
});

const SidebarWrapper = styled("div")({
  backgroundColor: "#06202B",
  width: "260px",
  height: "100vh",
  position: "fixed",
});

const Main = styled("div")({
  backgroundColor: "#F5EEDD",
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
  const [selectedItem, setSelectedItem] = useState<string>("Mobiles");

  const handleNavItem = (item: any) => {
    if (item.slug === "order-summary") {
      navigate("/order-summary");
    } else {
      setSelectedItem(item.name);
      navigate(`/product/${item.slug}`);
    }
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
            <Route path="/" element={<OrderSummary/>} />
            <Route
              path="/product/:productSlug"
              element={<Home product={selectedItem} />}
            />
            <Route path="/product/:id/:slug" element={<ConfirmOrder />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Routes>
        </Content>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
