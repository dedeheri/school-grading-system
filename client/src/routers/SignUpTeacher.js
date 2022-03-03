import { Route, Routes } from "react-router-dom";
import RegisterTeacher from "../pages/Teacher/Register";
import Verify from "../pages/Teacher/Verify";

function SignUpTeacher() {
  return (
    <Routes>
      <Route path={"/"} element={<RegisterTeacher />} />
      <Route path={"/verify"} element={<Verify />} />
    </Routes>
  );
}

export default SignUpTeacher;
