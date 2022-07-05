import React, { useState, Fragment, useEffect } from "react";

// component
import Input from "../Input";
import Button from "../Button";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { getScore, postScore } from "../../context/action/teacher-action";
import { REMOVE_ADD_DATA_SCORE } from "../../context/action/action-type";
import { useLocation } from "react-router-dom";

function AddScoreItem({ data, isFetching, setAddSlide }) {
  // state
  const [studentName, setStudentName] = useState(
    data?.result?.info?.[0]?.fullName
  );
  const [classRoom, setClassRoom] = useState(
    data?.result?.classRoom?.[0]?.classRoom
  );
  const [course, setCourse] = useState("");
  const [attendance, setAttendance] = useState("");
  const [bcOne, setBcOne] = useState("");
  const [bcTwo, setBcTwo] = useState("");
  const [bcThree, setBcThree] = useState("");
  const [bcFour, setBcFour] = useState("");
  const [midtermExam, setMidtermExam] = useState("");
  const [finalExams, setFinalExams] = useState("");

  const dispatch = useDispatch();
  const {
    postData: { data: scoreData, error },
  } = useSelector((state) => state.score);

  const handleAddScore = (e) => {
    e.preventDefault();
    dispatch(
      postScore(
        studentName,
        attendance,
        bcOne,
        bcTwo,
        bcThree,
        bcFour,
        midtermExam,
        finalExams,
        course
      )
    );
  };

  const { search } = useLocation();
  useEffect(() => {
    dispatch(getScore(search));
  }, [scoreData]);

  useEffect(() => {
    return () => {
      dispatch({ type: REMOVE_ADD_DATA_SCORE });
    };
  }, []);

  useEffect(() => {
    if (scoreData?.massage?.length > 0) {
      setAddSlide(false);
    }
  }, [scoreData]);

  return (
    <form onSubmit={handleAddScore}>
      <div className="space-y-3">
        {error &&
          error.map((err, i) => (
            <div className="space-y-1" key={i}>
              <p className="bg-red-200 px-3 py-1 rounded-md font-semibold">
                {err.msg}
              </p>
            </div>
          ))}

        {/* listBox */}
        <Listbox value={studentName} onChange={setStudentName}>
          <div className="relative">
            <div className="block text-lg mb-1 font-medium text-gray-700 font-roboto">
              Siswa
            </div>
            <Listbox.Button className="relative h-11 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span className="block truncate">
                {isFetching ? "Loading..." : studentName}
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
                {data?.result?.info?.map((items, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
                      cursor-default select-none relative py-2 pl-4 pr-4`
                    }
                    value={items.fullName}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`${
                            active ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {items.fullName}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {/* ListBox */}

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
                {data?.result?.classRoom?.map((cls, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
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
          onChange={(e) => setCourse(e.target.value)}
          title={"Pelajaran"}
          placeholder={"Pelajaran"}
        />
        <Input
          onChange={(e) => setAttendance(e.target.value)}
          title={"Kehadiran"}
          placeholder={"Kehadiran"}
          type={"Number"}
        />
        <Input
          onChange={(e) => setBcOne(e.target.value)}
          title={"Kompetensi Dasar Satu"}
          placeholder={"Kompetensi Dasar Satu"}
          type={"Number"}
        />
        <Input
          onChange={(e) => setBcTwo(e.target.value)}
          title={"Kompetensi Dasar Dua"}
          placeholder={"Kompetensi Dasar Dua"}
          type={"Number"}
        />
        <Input
          onChange={(e) => setBcThree(e.target.value)}
          title={"Kompetensi Dasar Tiga"}
          placeholder={"Kompetensi Dasar Tiga"}
          type={"Number"}
        />
        <Input
          onChange={(e) => setBcFour(e.target.value)}
          title={"Kompetensi Dasar Empat"}
          placeholder={"Kompetensi Dasar Empat"}
          type={"Number"}
        />
        <Input
          onChange={(e) => setMidtermExam(e.target.value)}
          title={"Ujian Tengah Semester"}
          placeholder={"Ujian Tengah Semester"}
          type={"Number"}
        />
        <Input
          onChange={(e) => setFinalExams(e.target.value)}
          title={"Ujian Akhir Semester"}
          placeholder={"Ujian Akhir Semester"}
          type={"Number"}
        />
      </div>
      <div className="mt-10 flex justify-end">
        <Button width={"w-full md:w-1/2"} title={"Tambahkan"} />
      </div>
    </form>
  );
}

export default AddScoreItem;
