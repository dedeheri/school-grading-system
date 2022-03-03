import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddStudent,
  setClassRoomList,
} from "../../../context/action/staff-action";
import Button from "../../Button";
import Input from "../../Input";

import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

function AddStudentItem() {
  const dispatch = useDispatch();
  const { data: classLists, isFetching } = useSelector(
    (state) => state.classRoomList
  );
  const { validationMessage, errorMessage } = useSelector(
    (state) => state.student
  );

  const [fullName, setFullName] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postelCode, setPostelCode] = useState("");

  useEffect(() => {
    dispatch(setClassRoomList("?sort=-1"));
  }, []);

  useEffect(() => {
    setClassRoom(classLists?.result?.[0].classRoom);
  }, [classLists]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    dispatch(
      setAddStudent(
        fullName,
        classRoom,
        identityNumber,
        street,
        city,
        province,
        postelCode
      )
    );
  };

  return (
    <>
      <div className="space-y-3">
        {/* error */}
        {validationMessage && (
          <div className="space-y-2">
            {validationMessage.map((s, i) => (
              <p
                key={i}
                className="bg-red-200 p-1 px-4 font-semibold rounded-lg"
              >
                {s.msg}
              </p>
            ))}
          </div>
        )}

        {errorMessage && (
          <div className="space-y-2">
            <p className="bg-red-200 p-1 px-4 font-semibold rounded-lg">
              {errorMessage}
            </p>
          </div>
        )}

        <Input
          onChange={(e) => setFullName(e.target.value)}
          title={"Nama Lengkap"}
          placeholder={"Nama Lengkap"}
          type={"text"}
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
                {classLists?.result?.map((classList, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
                      cursor-default select-none relative py-2 pl-4 pr-4`
                    }
                    value={classList.classRoom}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`${
                            active ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {classList.classRoom}
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
          onChange={(e) => setIdentityNumber(e.target.value)}
          title={"No Indentitas"}
          placeholder={"No Indentitas"}
          type={"text"}
        />
        <Input
          onChange={(e) => setStreet(e.target.value)}
          title={"Jalan"}
          placeholder={"Jalan"}
          type={"text"}
        />
        <Input
          onChange={(e) => setCity(e.target.value)}
          title={"Kota"}
          placeholder={"Kota"}
          type={"text"}
        />
        <Input
          onChange={(e) => setProvince(e.target.value)}
          title={"Provinsi"}
          placeholder={"Provinsi"}
          type={"text"}
        />
        <Input
          onChange={(e) => setPostelCode(e.target.value)}
          title={"Kode Pos"}
          placeholder={"Kode Pos"}
          type={"number"}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleAddStudent}
          width={"md:w-1/2 w-full mt-10"}
          title={"Tambahkan"}
        />
      </div>
    </>
  );
}

export default AddStudentItem;
