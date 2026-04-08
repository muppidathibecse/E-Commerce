import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import Layout from "../layout/Layout";
import Start from "../pages/Starter/Start";
import Home from "../pages/Home/Home";
import ConfirmOrder from "../pages/ConfirmOrder/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary/OrderSummary";
import Likes from "../pages/Likes/Likes";
import JsonLearn from "../pages/JsonLearn/JsonLearn";
import LoginPage from "../pages/Login/LoginPage";
import AdminHomepage from "../pages/AdminPanel/AdminHomepage";
import AdminRoute from "./privateRoutes/AdminRoute";
import AddProduct from "../pages/AdminPanel/AddProduct";
import ViewProduct from "../pages/AdminPanel/ViewProduct";
import UserRoute from "./privateRoutes/UserRoute";
import ViewUsers from "../pages/AdminPanel/ViewUsers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<UserRoute />}>
        <Route path="/products" element={<Layout />}>
          <Route path=":productName" element={<Home />} />
          <Route path=":id/:slug" element={<ConfirmOrder />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="likes" element={<Likes />} />
          <Route path="json-learning" element={<JsonLearn />} />
        </Route>
      </Route>

      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/view-users" element={<ViewUsers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
