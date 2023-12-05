import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Loginpage";
import DashBoard from "../pages/dashboard";
import CreateCard from "../pages/createCard/createCard";
import ProtectRoute from "./protectRoutes";
import EditCard from "../pages/editCard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<ProtectRoute />}>
          <Route index element={<DashBoard />}></Route>
        </Route>
        <Route path="/createcard" element={<ProtectRoute />}>
          <Route index element={<CreateCard />}></Route>
        </Route>
        <Route path="/editcard/:id" element={<ProtectRoute />}>
          <Route index element={<EditCard />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesMain;
