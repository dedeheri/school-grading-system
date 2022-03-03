import { Route, Routes } from "react-router-dom";
import Auth from "./routers/Auth";
import SignUpTeacher from "./routers/SignUpTeacher";
import Staff from "./routers/Staff";
import Teacher from "./routers/Teacher";

function App() {
  return (
    <Routes>
      <Route path={"/*"} element={<Auth />} />
      <Route path={"/staff/*"} element={<Staff />} />
      <Route path={"/signup/teacher/*"} element={<SignUpTeacher />} />
      <Route path={"/teacher/*"} element={<Teacher />} />
    </Routes>
  );
}

export default App;
