import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Sidebar from "./Sidebar/Sidebar";
import Home from "../pages/Home/Home";
import ConfirmOrder from "../pages/ConfirmOrder/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary/OrderSummary";
import Likes from "../pages/Likes/Likes";
import JsonLearn from "../pages/JsonLearn/JsonLearn";

const LayoutWrapper = styled("div")({
  display: "flex",
  height: "100vh",
  overflow: "hidden",
});

const SidebarWrapper = styled("div")<{ collapsed?: boolean }>(
  ({ collapsed }) => ({
    width: collapsed ? "80px" : "300px",
    backgroundColor: "#06202B",
    height: "100vh",
    transition: "width 0.3s ease",
    overflow: "hidden",
  })
);

const Main = styled("div")({
  flex: 1,
  backgroundColor: "#F5EEDD",
  padding: "16px",
  overflowY: "auto",
  
});

const Layout = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string>("Mobiles");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleNavItem = (item: any) => {
    if (item.slug === "order-summary") {
      navigate("/order-summary");
    } else if (item.slug === "likes") {
      navigate("/likes");
    } else {
      setSelectedItem(item.name);
      navigate(`/product/${item.slug}`);
    }
  };

  return (
    <LayoutWrapper>
      <SidebarWrapper collapsed={isCollapsed}>
        <Sidebar
          onNavItemClick={handleNavItem}
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
        />
      </SidebarWrapper>

      <Main>
        <Routes>
          <Route path="/" element={<OrderSummary />} />
          <Route
            path="/product/:productSlug"
            element={<Home product={selectedItem} />}
          />
          <Route path="/product/:id/:slug" element={<ConfirmOrder />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/likes" element={<Likes />} />
           <Route path="/json-learning" element={<JsonLearn />} />
        </Routes>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;