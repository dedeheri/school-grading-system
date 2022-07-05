import { Route, Routes } from "react-router-dom";
import Auth from "./routers/Auth";
import Signup from "./routers/Signup";
import Staff from "./routers/Staff";
import Student from "./routers/Student";
import Teacher from "./routers/Teacher";

function App() {
  return (
    <Routes>
      <Route path={"/*"} element={<Auth />} />
      <Route path={"/staff/*"} element={<Staff />} />
      <Route path={"/signup/*"} element={<Signup />} />
      <Route path={"/teacher/*"} element={<Teacher />} />
      <Route path={"/student/*"} element={<Student />} />
    </Routes>
  );
}

export default App;
