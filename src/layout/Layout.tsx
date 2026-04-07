import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Sidebar from "./Sidebar/Sidebar";

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
  }),
);

const Main = styled("div")({
  flex: 1,
  backgroundColor: "#F5EEDD",
  padding: "16px",
  overflowY: "auto",
});

const Layout = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleNavItem = (item: any) => {
    if (item.slug === "order-summary") {
      navigate("order-summary");
    } else if (item.slug === "likes") {
      navigate("likes");
    } else {
      navigate(`/products/${item.name}`);
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
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
