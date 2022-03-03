import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Button from "../../components/Button";
import Input from "../../components/Input";
import UpdateSkeleton from "../../components/UpdateSkeleton";
import {
  setClassRoomList,
  setDetailStudent,
  setUpdateStudent,
} from "../../context/action/staff-action";

import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

function UpdateStudent() {
  const dispatch = useDispatch("");
  const {
    dataDetail: data,
    isFetchingUpdate,
    loadingBar,
    validationMessageUpdate,
    errorMessageUpdate,
    dataUpdate,
  } = useSelector((state) => state.student);

  const { data: dataClass, isFetching } = useSelector(
    (state) => state.classRoomList
  );

  const { search } = useLocation();
  const router = useNavigate();

  useEffect(() => {
    dispatch(setDetailStudent(search));
    dispatch(setClassRoomList("?sort=-1"));
  }, []);

  const [identityNumber, setIdentityNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postelCode, setPostelCode] = useState();

  useEffect(() => {
    setIdentityNumber(data?.result?.identityNumber);
    setFullName(data?.result?.fullName);
    setClassRoom(data?.result?.classRoom);
    setStreet(data?.result?.address?.street);
    setCity(data?.result?.address?.city);
    setProvince(data?.result?.address?.province);
    setPostelCode(data?.result?.address?.postelCode);
  }, [data]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      setUpdateStudent(
        search,
        fullName,
        identityNumber,
        classRoom,
        province,
        city,
        street,
        postelCode
      )
    );
    if (dataUpdate?.message == "Success") return router("/staff/student");
  };

  return (
    <div className="md:pl-52 pt-10 mx-4">
      <LoadingBar
        loaderSpeed={1000}
        color="#000000"
        height={3}
        progress={loadingBar}
      />
      {isFetchingUpdate ? (
        <UpdateSkeleton />
      ) : (
        <>
          {validationMessageUpdate && (
            <div className=" space-x-3 flex mb-3">
              {validationMessageUpdate?.map((e, i) => (
                <div className="p-1 px-4 text-red-500 bg-red-100 rounded-xl">
                  {e.msg}
                </div>
              ))}
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
            <Input
              onChange={(e) => setIdentityNumber(e.target.value)}
              defaultValue={identityNumber}
              title={"No Indentitas"}
              readOnly
            />
            <Input
              defaultValue={fullName}
              title={"Nama Lengkap"}
              onChange={(e) => setFullName(e.target.value)}
            />

            <Listbox value={classRoom} onChange={setClassRoom}>
              <div className="relative">
                <div className="block text-lg mb-1 font-medium text-gray-700 font-roboto">
                  Kelas
                </div>
                <Listbox.Button className="relative h-11 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">
                    {isFetching ? "Loading..." : classRoom}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full z-50 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-xl max-h-80 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {dataClass?.result?.map((cls, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-gray-900 bg-gray-100"
                              : "text-gray-900"
                          }
                          cursor-default select-none relative py-2 pl-4 pr-4`
                        }
                        value={cls.classRoom}
                      >
                        {({ active }) => (
                          <>
                            <span
                              className={`${
                                active ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {cls.classRoom}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <Input
              onChange={(e) => setStreet(e.target.value)}
              defaultValue={street}
              title={"Jalan"}
            />
            <Input
              onChange={(e) => setCity(e.target.value)}
              defaultValue={city}
              title={"Kota"}
            />
            <Input
              onChange={(e) => setProvince(e.target.value)}
              defaultValue={province}
              title={"Provinsi"}
            />
            <Input
              onChange={(e) => setPostelCode(e.target.value)}
              defaultValue={postelCode}
              title={"Kode Pos"}
            />
          </div>
          <div className="md:flex md:space-x-2 justify-end space-y-2 mt-10 md:mt-4 md:space-y-0 mb-4">
            <Button
              width={"md:w-52 w-full"}
              onClick={() => router("/staff/student")}
              title={"Batal"}
            />
            <Button
              onClick={handleUpdate}
              width={"md:w-52 w-full"}
              title={"Edit"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default UpdateStudent;
