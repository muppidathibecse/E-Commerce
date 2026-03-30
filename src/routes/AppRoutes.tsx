import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default AppRoutes;