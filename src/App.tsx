import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  localStorage.setItem("isAdmin", "false");
  localStorage.setItem("isUser", "false");
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
