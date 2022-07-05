import Cookies from "js-cookie";
import objectHash from "object-hash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SidebarItems from "../components/Teacher/SidebarItems";
import { getLoadUserTeacher } from "../context/action/user-load-action";
import Home from "../pages/Teacher/Home";
import Score from "../pages/Teacher/Score";
import Forbidden from "../components/Forbidden";
import { REMOVE_DATA_USER } from "../context/action/action-type";
import UpdateScore from "../pages/Teacher/UpdateScore";
import Me from "../pages/Teacher/Me";

function Teacher() {
  const [menu, setMenu] = useState(false);
  const [protec, setProtec] = useState(true);
  const { error } = useSelector((state) => state.users);

  // redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoadUserTeacher());
    return () => {
      dispatch({ type: REMOVE_DATA_USER });
    };
  }, []);

  useEffect(() => {
    Cookies.get("secure-To") &&
    Cookies.get("secure-2nd") == objectHash("Teacher")
      ? setProtec(true)
      : setProtec(false);
  }, []);

  return (
    <>
      {protec ? (
        <>
          {error ? (
            <Forbidden error={error} />
          ) : (
            <>
              <Navbar menu={menu} setMenu={setMenu} />
              <Container error={error}>
                <Sidebar menu={menu} setMenu={setMenu}>
                  <SidebarItems />
                </Sidebar>
                <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/score"} element={<Score />} />
                  <Route path={"/score/update"} element={<UpdateScore />} />
                  <Route path={"/me"} element={<Me />} />
                </Routes>
              </Container>
            </>
          )}
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      )}
    </>
  );
}

export default Teacher;
