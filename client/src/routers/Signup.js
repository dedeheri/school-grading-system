import { Route, Routes } from "react-router-dom";
import InputPasswordRegistrasi from "../pages/Student/InputPasswordRegistrasi";
import Registrasi from "../pages/Student/Registrasi";
import RegistrasiStaff from "../pages/Staff/Registrasi";
import RegisterTeacher from "../pages/Teacher/Register";
import Verify from "../pages/Teacher/Verify";

function SignUpTeacher() {
  return (
    <Routes>
      <Route path={"/teacher/"} element={<RegisterTeacher />} />
      <Route path={"/teacher/verify"} element={<Verify />} />
      <Route path={"/student"} element={<Registrasi />} />
      <Route path={"/student/verify"} element={<InputPasswordRegistrasi />} />
      <Route path={"/staff"} element={<RegistrasiStaff />} />
    </Routes>
  );
}

export default SignUpTeacher;
