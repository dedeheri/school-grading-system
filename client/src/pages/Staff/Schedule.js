import { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setSchedule } from "../../context/action/staff-action";

// router
import { useLocation } from "react-router-dom";

// components
import Print from "../../components/Print";
import Pagination from "../../components/Pagination";
import Grid from "../../components/Grid";
import Sort from "../../components/Sort";
import ButtonSlide from "../../components/ButtonSlide";
import TableSkeleton from "../../components/TableSkeleton";
import Add from "../../components/Staff/Add/Add";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import Table from "../../components/Table";
import { AddScheduleItem } from "../../components/Staff";

function Schedule() {
  const {
    getData: {
      data: dataSchedule,
      page: { page },
    },

    isFetching,
    loadingBar,
  } = useSelector((state) => state.schedule);

  const on = true;
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSchedule(search));
  }, [search]);

  console.log(page);

  const [scheduleList, setScheduleList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterSearch = dataSchedule?.data?.filter((fill) => {
      return fill.teacherId.fullName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setScheduleList(filterSearch);
  }, [dataSchedule, searchTerm]);

  const columnName = [
    "Kode Jadwal",
    "Guru",
    "Kelas",
    "Pelajaran",
    "Hari",
    "Waktu",
  ];
  const [addSlide, setAddSlide] = useState(false);

  return (
    <Grid loadingBarValue={loadingBar}>
      <div className="flex justify-between items-center">
        <Search
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-x-2 flex items-center">
          <Print columnName={columnName} tableData={scheduleList} />
          <Sort />
          <Filter extend={true} />
          <ButtonSlide addSlide={addSlide} setAddSlide={setAddSlide} />
          <Add
            addSlide={addSlide}
            setAddSlide={setAddSlide}
            title={"Tambah Jadwal"}
          >
            <AddScheduleItem setAddSlide={setAddSlide} />
          </Add>
        </div>
      </div>

      {isFetching ? (
        <TableSkeleton />
      ) : (
        <div className="mt-10 ">
          <Table columnName={columnName} data={scheduleList} on={on} />
          <div className="mt-3">
            <Pagination page={page} />
          </div>
        </div>
      )}
    </Grid>
  );
}

export default Schedule;
