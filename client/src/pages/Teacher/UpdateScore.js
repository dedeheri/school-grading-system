import React, { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import Input from "../../components/Input";

import { useDispatch, useSelector } from "react-redux";
import { getDetailScore } from "../../context/action/teacher-action";

import { useLocation } from "react-router-dom";
import Button from "../../components/Button";

function UpdateScore() {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const {
    detail: { data, loading, loadingBar, error },
  } = useSelector((state) => state.score);

  // calling api
  useEffect(() => {
    dispatch(getDetailScore(search));
  }, [search]);

  console.log(data);

  // state
  const [course, setCourse] = useState("");
  const [attendance, setAttendance] = useState("");
  const [bcOne, setBcOne] = useState("");
  const [bcTwo, setBcTwo] = useState("");
  const [bcThree, setBcThree] = useState("");
  const [bcFour, setBcFour] = useState("");
  const [midtermExam, setMidtermExam] = useState("");
  const [finalExams, setFinalExams] = useState("");

  // input for value
  useEffect(() => {
    setCourse(data?.result?.task?.course);
    setAttendance(data?.result?.task?.attendance);
    setBcOne(data?.result?.task?.bcOne);
    setBcTwo(data?.result?.task?.bcTwo);
    setBcThree(data?.result?.task?.bcThree);
    setBcFour(data?.result?.task?.bcFour);
    setMidtermExam(data?.result?.task?.midtermExam);
    setFinalExams(data?.result?.task?.finalExams);
  }, [data, search]);

  console.log(bcOne);

  return (
    <Grid loadingBarValue={loadingBar}>
      <div className="space-y-2">
        <h1 className="text-2xl">{data?.result?.student?.fullName}</h1>
        <div className="flex space-x-4">
          <h1 className="text-lg bg-blue-200 px-4 rounded-lg">
            {data?.result?.student?.identityNumber}
          </h1>
          <h1 className="text-lg bg-green-200 px-4 rounded-lg">
            {data?.result?.student?.codeStudent}
          </h1>
          <h1 className="text-lg bg-yellow-200 px-4 rounded-lg">
            {data?.result?.student?.classRoom}
          </h1>
        </div>
      </div>

      <form className="mt-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input title={"Mata Pelajaran"} value={course} />
          <Input title={"Kehadiran"} value={attendance} />
          <Input title={"Kompetensi Dasar Satu"} value={bcOne} />
          <Input title={"Kompetensi Dasar Dua"} value={bcTwo} />
          <Input title={"Kompetensi Dasar Tiga"} value={bcThree} />
          <Input title={"Kompetensi Dasar Empat"} value={bcFour} />
          <Input title={"Ujian Tenggah Semester"} value={midtermExam} />
          <Input title={"Ujian Akhir Semester"} value={finalExams} />
        </div>

        <div className="md:flex md:space-x-2 justify-end  space-y-2 mt-10 md:mt-4 md:space-y-0">
          <Button width={"md:w-52 w-full"} title={"Edit"} type="submit" />
          <Button width={"md:w-52  w-full"} title={"Batal"} />
        </div>
      </form>
    </Grid>
  );
}

export default UpdateScore;
