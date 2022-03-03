import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Staff/Home";
import Schedule from "../pages/Staff/Schedule";
import { useDispatch, useSelector } from "react-redux";
import objectHash from "object-hash";
import LoadingBar from "react-top-loading-bar";
import Teacher from "../pages/Staff/Teacher";
import DetailTeacher from "../pages/Staff/DetailTeacher";
import { setLoadUser } from "../context/action/user-load-action";
import Update from "../components/Update";
import Container from "../components/Container";
import Students from "../pages/Staff/Students";
import ClassList from "../pages/Staff/Class";
import UpdateClass from "../pages/Staff/UpdateClass";
import UpdateTeacher from "../pages/Staff/UpdateTeacher";
import DetailStudent from "../pages/Staff/DetailStudent";
import UpdateStudent from "../pages/Staff/UpdateStudent";
import Account from "../pages/Staff/Account";
import SidebarItem from "../components/SidebarItem";

function Staff() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    dispatch(setLoadUser(Cookies.get("uid")));
    Cookies.get("secure-To") && Cookies.get("secure-2nd") == objectHash("Staff")
      ? setAuthenticated(true)
      : setAuthenticated(false);

    return () => {
      dispatch({ type: "REMOVE_DATA_USER" });
    };
  }, []);

  return (
    <>
      {authenticated ? (
        <>
          <Navbar menu={menu} setMenu={setMenu} />
          <Container>
            <Sidebar menu={menu} setMenu={setMenu}>
              <SidebarItem />
            </Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="teacher" element={<Teacher />} />
              <Route path="teacher/update" element={<UpdateTeacher />} />
              <Route path="teacher/detail" element={<DetailTeacher />} />
              <Route path="schedule/update" element={<Update />} />
              <Route path="student" element={<Students />} />
              <Route path="student/detail" element={<DetailStudent />} />
              <Route path="student/update" element={<UpdateStudent />} />
              <Route path="class" element={<ClassList />} />
              <Route path="class/update" element={<UpdateClass />} />
              <Route path="account" element={<Account />} />
            </Routes>
          </Container>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      )}
    </>
  );
}

export default Staff;
