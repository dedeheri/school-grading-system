import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarItem from "../components/Student/SidebarItem";
import SidebarItems from "../components/Teacher/SidebarItems";
import { REMOVE_DATA_USER } from "../context/action/action-type";
import { getLoadUserStudent } from "../context/action/user-load-action";
import Home from "../pages/Student/Home";
import Score from "../pages/Student/Score";

function Student() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    dispatch(getLoadUserStudent());
    return () => {
      dispatch({ type: REMOVE_DATA_USER });
    };
  }, []);

  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      <Container>
        <Sidebar menu={menu} setMenu={setMenu}>
          <SidebarItem />
        </Sidebar>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/score"} element={<Score />} />
        </Routes>
      </Container>
    </>
  );
}

export default Student;
