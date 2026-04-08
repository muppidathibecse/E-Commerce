import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AdminRoute = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    if (!isAdmin) {
      toast.error("Please login as Admin", {
      className: "custom-toast",
    });
    }
  }, [isAdmin]);

  return isAdmin ? <Outlet /> : <Navigate to="/login" state={{ message: "admin" }} replace />;
};

export default AdminRoute;