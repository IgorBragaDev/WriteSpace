import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Loginpage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
    </Routes>
  );
};


export default RoutesMain