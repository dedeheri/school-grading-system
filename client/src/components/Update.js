import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import apis from "../api/apis";
import Button from "./Button";
import Input from "./Input";
import react, { useState, useEffect } from "react";
import {
  setDetailOneSchedule,
  setUpdateSchedule,
} from "../context/action/staff-action";
import { REMOVE_UPDATE_DETAILS_SCHEDULE } from "../context/action/action-type";
import UpdateSkeleton from "./UpdateSkeleton";
import LoadingBar from "react-top-loading-bar";

function Update() {
  const dispatch = useDispatch();
  const { dataUpdate, isFetching, error, loadingBar } = useSelector(
    (state) => state.schedule
  );
  const { search } = useLocation();
  useEffect(() => {
    dispatch(setDetailOneSchedule(search));
    return () => {
      dispatch({ type: REMOVE_UPDATE_DETAILS_SCHEDULE });
    };
  }, []);
  const [currentUser, setCurrenUser] = useState({});
  const [course, setCourse] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    setCurrenUser({
      course: dataUpdate?.schedule?.course,
      classRoom: dataUpdate?.schedule?.classRoom,
      day: dataUpdate?.schedule?.day,
      time: dataUpdate?.schedule?.time,
    });

    setCourse(dataUpdate?.schedule?.course);
    setClassRoom(dataUpdate?.schedule?.classRoom);
    setDay(dataUpdate?.schedule?.day);
    setTime(dataUpdate?.schedule?.time);
  }, [dataUpdate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(setUpdateSchedule(search, course, classRoom, day, time));
    if (dataUpdate?.message == "Success") {
      navigate("/staff/schedule");
    }
  };

  return (
    <div className="md:pl-52 pt-10 mx-4">
      <LoadingBar
        loaderSpeed={1000}
        color="#000000"
        height={3}
        progress={loadingBar}
      />
      {isFetching ? (
        <UpdateSkeleton />
      ) : (
        <>
          {error && error.map((er, i) => <span key={i}>{er.msg}</span>)}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <Input
              width={"w-full"}
              title={"Pelajaran"}
              defaultValue={currentUser?.course || ""}
              onChange={(e) => setCourse(e.target.value)}
            />
            <Input
              width={"w-full"}
              title={"Kelas"}
              defaultValue={currentUser?.classRoom || ""}
              onChange={(e) => setClassRoom(e.target.value)}
            />
            <Input
              width={"w-full"}
              title={"Hari"}
              defaultValue={currentUser?.day || ""}
              onChange={(e) => setDay(e.target.value)}
            />
            <Input
              width={"w-full"}
              title={"Waktu"}
              defaultValue={currentUser?.time || ""}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="md:flex md:space-x-2 justify-end space-y-2 mt-10 md:mt-4 md:space-y-0">
            <Button
              onClick={handleUpdate}
              width={"md:w-52"}
              title={"Edit"}
              type="submit"
            />
            <Button
              width={"md:w-52"}
              title={"Batal"}
              onClick={() => navigate("/staff/schedule")}
            />
          </div>
        </>
      )}
    </div>
  );
}
export default Update;
