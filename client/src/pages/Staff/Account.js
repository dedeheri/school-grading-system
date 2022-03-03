import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import {
  setAccount,
  setConfirmationAccount,
} from "../../context/action/staff-action";
import Search from "../../components/Search";
import moment from "moment";
import CardSkeleton from "../../components/CardSkeleton";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer } from "react-toastify";
import TableAccountList from "../../components/TableAccountList";

function Account() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data, isFetching, loadingBar, error, success } = useSelector(
    (state) => state.account
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    dispatch(setAccount(location.search));
  }, [location.search, success]);

  useEffect(() => {
    const filterd = data?.users?.filter((e) => {
      return e.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setDataSearch(filterd);
  }, [data, searchTerm]);

  const router = useNavigate();
  const handleQueryTeacher = (props) => {
    router({
      search: `${createSearchParams({
        sort: props,
      })}`,
    });
  };

  const updateAccountConfirmation = (id) => {
    dispatch(setConfirmationAccount(id));
  };

  const condi = location.search.slice(6, location.search.length);
  const activeState = "border-b-2 border-black";
  const notActiveState = "text-gray-500";

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
        {error && <div>{error.message}</div>}

        <h1 className="text-xl mb-5">Konfirmasi Akun</h1>
        {isFetching ? (
          <CardSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {data?.confirmation?.length == 0
              ? "Data Kosong.."
              : data?.confirmation?.map((e, i) => (
                  <div key={i} className="border p-2 rounded-xl">
                    <div className="flex justify-between items-center">
                      <p className="font-bold">{e.fullName}</p>
                      <p>{e.codeTeacher}</p>
                    </div>
                    <p>{e.identityNumber}</p>
                    <p>{moment(e.createdAt, "YYYYMMDD").fromNow()}</p>
                    <div className="flex space-x-1 justify-end mt-8 ">
                      <p
                        onClick={() => updateAccountConfirmation(e._id)}
                        className="text-green-500 cursor-pointer p-1 hover:bg-gray-100 hover:rounded-md"
                      >
                        Konfirmasi
                      </p>
                      <div className="border-l" />
                      <p className="text-red-500 cursor-pointer p-1 hover:bg-gray-100 hover:rounded-md ">
                        Hapus
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        )}

        <h1 className="text-xl mt-10">Akun Terdaftar</h1>

        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-3">
            <p
              onClick={() => handleQueryTeacher("Staff")}
              className={`text-xl cursor-pointer hover:border-b-2  ${
                condi == "Staff" ? activeState : notActiveState
              }`}
            >
              Staff
            </p>
            <p
              onClick={() => handleQueryTeacher("Teacher")}
              className={`text-xl cursor-pointer hover:border-b-2  ${
                condi == "Teacher" ? activeState : notActiveState
              }`}
            >
              Guru
            </p>
            <p
              onClick={() => handleQueryTeacher("Student")}
              className={`text-xl cursor-pointer  hover:border-b-2 ${
                condi == "Student" ? activeState : notActiveState
              }`}
            >
              Siswa
            </p>
          </div>
          <Search
            type={"text"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <TableAccountList data={dataSearch} />
      </div>
    </>
  );
}

export default Account;
