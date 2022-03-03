import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// ui
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

// components
import Button from "../../Button";
import Input from "../../Input";

import {
  addSchedule,
  setClassRoomList,
  setSchedule,
  setTeacher,
} from "../../../context/action/staff-action";
import { REMOVE_ADD_SCHEDULE } from "../../../context/action/action-type";
import { useLocation } from "react-router-dom";

function AddScheduleItem({ setAddSlide }) {
  const dispatch = useDispatch();
  const {
    getData: { data: teachers, isFetching },
  } = useSelector((state) => state.teacher);
  const { data: classRooms, isFetching: classRoomFetching } = useSelector(
    (state) => state.classRoomList
  );
  const {
    postData: { message, slide, error },
  } = useSelector((state) => state.schedule);

  console.log(message?.length);

  const [teacherName, setTeacherName] = useState("");
  const [course, setCourse] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    dispatch(setTeacher("?sort-1"));
    dispatch(setClassRoomList("?sort-1"));
  }, []);

  useEffect(() => {
    setTeacherName(teachers?.[0]?.fullName);
    setClassRoom(classRooms?.result?.[0]?.classRoom);
  }, [teachers]);

  function handleAddSchedule(e) {
    e.preventDefault();
    dispatch(addSchedule(teacherName, course, classRoom, day, time));
  }

  // remove data in state post
  useEffect(() => {
    return () => {
      dispatch({ type: REMOVE_ADD_SCHEDULE });
    };
  }, []);

  // re-call all data if post success
  const location = useLocation();
  useEffect(() => {
    if (message?.length > 0) {
      setAddSlide(slide);
    }
    dispatch(setSchedule(location.search));
  }, [message]);

  return (
    <Fragment>
      <div className="space-y-3">
        {error && (
          <div className="space-y-1">
            {error.map((err, i) => (
              <div className="flex flex-col " key={i}>
                <h3 className="bg-red-200 p-1 rounded-lg text-black">
                  {err.msg}
                </h3>
              </div>
            ))}
          </div>
        )}
        {/* ListBox */}
        <Listbox value={teacherName} onChange={setTeacherName}>
          <div className="relative">
            <div className="block text-lg mb-1 font-medium text-gray-700 font-roboto">
              Guru
            </div>
            <Listbox.Button className="relative h-11 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span className="block truncate">
                {isFetching ? "Loading..." : teacherName}
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
                {teachers?.map((teacher, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-4 pr-4`
                    }
                    value={teacher.fullName}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`${
                            active ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {teacher.fullName}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        {/* End ListBox */}

        <Input
          title={"Pelajaran"}
          placeholder={"Pelajaran"}
          onChange={(e) => setCourse(e.target.value)}
        />

        {/* List Box ClassRoom */}
        <Listbox value={classRoom} onChange={setClassRoom}>
          <div className="relative">
            <div className="block text-lg mb-1 font-medium text-gray-700 font-roboto">
              Kelas
            </div>
            <Listbox.Button className="relative h-11 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span className="block truncate">
                {classRoomFetching ? "Loading..." : classRoom}
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
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-xl max-h-80 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {classRooms?.result?.map((c, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-3 pr-4`
                    }
                    value={c.classRoom}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`${
                            active ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {c.classRoom}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        {/* End List Box ClassRoom */}

        <Input
          title={"Hari"}
          placeholder={"Hari"}
          onChange={(e) => setDay(e.target.value)}
        />
        <Input
          title={"Waktu"}
          placeholder={"Waktu"}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-10">
        <Button
          onClick={handleAddSchedule}
          width={"md:w-52 w-full"}
          title="Tambah"
        />
      </div>
    </Fragment>
  );
}

export default AddScheduleItem;
