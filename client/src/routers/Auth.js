import { Route, Routes } from "react-router-dom";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";

function auth() {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/forget-password"} element={<ForgetPassword />} />
    </Routes>
  );
}

export default auth;
