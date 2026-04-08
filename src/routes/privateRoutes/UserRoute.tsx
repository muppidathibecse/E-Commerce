import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const UserRoute = () => {
  const isUser = localStorage.getItem("isUser") === "true";
  useEffect(() => {
    if (!isUser) {
      toast.error("Please Login as User", {
        className: "custom-toast",
      });
    }
  }, [isUser]);

  return isUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ message: "user" }} replace />
  );
};

export default UserRoute;
