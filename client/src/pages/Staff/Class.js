import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { setClassRoomList } from "../../context/action/staff-action";

import LoadingBar from "react-top-loading-bar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TableSkeleton from "../../components/TableSkeleton";
import Search from "../../components/Search";
import { Add, AddClassItem } from "../../components/Staff";
import TableClass from "../../components/TableClass";
import ButtonSlide from "../../components/ButtonSlide";
import Sort from "../../components/Sort";

function ClassList() {
  const dispatch = useDispatch();
  const { data, isFetching, error, loadingBar } = useSelector(
    (state) => state.classRoomList
  );

  const [addSlide, setAddSlide] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    dispatch(setClassRoomList(search));
  }, [search]);

  // search
  const [searchTerm, setSearchTerm] = useState("");
  const [classList, SetclassList] = useState([]);
  useEffect(() => {
    const filtered = data?.result?.filter((fil) => {
      return fil.homeRoomTeacher
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    SetclassList(filtered);
  }, [data, searchTerm]);

  const coulums = ["Kode Kelas", "Kelas", "Wali Kelas"];
  return (
    <>
      <LoadingBar
        loaderSpeed={1000}
        color="#000000"
        height={3}
        progress={loadingBar}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <div className="md:pl-52 pt-10 mx-4 animate-slide-in-up">
        <div className="flex justify-between items-center">
          <Search onChange={(e) => setSearchTerm(e.target.value)} />
          <div className="space-x-2 flex items-center">
            <Sort />
            <ButtonSlide addSlide={addSlide} setAddSlide={setAddSlide} />
            <Add
              title={"Tambah Kelas"}
              addSlide={addSlide}
              setAddSlide={setAddSlide}
            >
              <AddClassItem setAddSlide={setAddSlide} />
            </Add>
          </div>
        </div>
        <div className="mt-10">
          {isFetching ? (
            <TableSkeleton />
          ) : (
            <TableClass coulums={coulums} list={classList} />
          )}
        </div>
      </div>
    </>
  );
}

export default ClassList;
