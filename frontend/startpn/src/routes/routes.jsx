import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Loginpage";
import DashBoard from "../pages/dashboard";
import CreateCard from "../pages/createCard/createCard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/createcard" element={<CreateCard/>}></Route>
      </Route>
    </Routes>
  );
};

export default RoutesMain;
