import Home from "../../pages/Home/Home";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { styled } from "@mui/material/styles";

const LayoutWrapper = styled("div")({
  display: "flex",
});

const SidebarWrapper = styled("div")({
  width: "260px",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  background: "#f5f5f5",
});

const Main = styled("div")({
  marginLeft: "260px",
  width: "calc(100% - 260px)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
});

const Content = styled("div")({
 
});

const Layout = () => {
  return (
    <LayoutWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>

      <Main>
        <Header />
        <Content>
          <Home />
        </Content>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
