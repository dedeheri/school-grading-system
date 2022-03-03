import { useEffect } from "react";
import Card from "../../components/Card";
import CardSkeleton from "../../components/CardSkeleton";
import Table from "../../components/Table";
import TableSkeleton from "../../components/TableSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setHome } from "../../context/action/staff-action";
import LoadingBar from "react-top-loading-bar";

function Home() {
  const dispatch = useDispatch();
  const {
    data: aktivityList,
    isFetching,
    loadingBar,
  } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(setHome());
  }, [dispatch]);

  // tables
  const columnName = [
    "Kode Jadwal",
    "Guru",
    "Kelas",
    "Pelajaran",
    "Hari",
    "Waktu",
  ];

  return (
    <>
      <LoadingBar
        loaderSpeed={1000}
        color="#000000"
        height={3}
        progress={loadingBar}
      />

      <div className="md:pl-52 pt-10 mx-4 animate-slide-in-up">
        {isFetching ? (
          <CardSkeleton />
        ) : (
          <Card
            studentCount={aktivityList.countStudents}
            teacherCount={aktivityList.countTeacher}
            staffCount={aktivityList.countStaff}
            scheduleCount={aktivityList.countSchedule}
            classCount={aktivityList.countClass}
          />
        )}
        {/* table */}
        <h1 className="mt-10 mb-4 text-xl font-bold ">Aktivitas Hari ini</h1>
        {isFetching ? (
          <TableSkeleton />
        ) : (
          <Table list={aktivityList.result} columnName={columnName} />
        )}
      </div>
    </>
  );
}

export default Home;
