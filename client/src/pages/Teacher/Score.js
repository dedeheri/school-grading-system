import React, { useEffect, useState } from "react";

// componentes
import Grid from "../../components/Grid";
import Search from "../../components/Search";
import Filter from "../../components/Teacher/Filter";
import Sort from "../../components/Sort";
import Pagination from "../../components/Pagination";
import ButtonSlide from "../../components/ButtonSlide";
import Add from "../../components/Staff/Add/Add";
import TableScore from "../../components/Teacher/TableScore";
import AddScoreItem from "../../components/Teacher/AddScoreItem";
import TableSkeleton from "../../components/TableSkeleton";

import { useDispatch, useSelector } from "react-redux";
import {
  getScore,
  getInformationStudent,
} from "../../context/action/teacher-action";

import { useLocation } from "react-router-dom";

function Score() {
  // state
  const [addSlide, setAddSlide] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResultValue, setSearchResultValue] = useState([]);

  //   redux state
  const dispatch = useDispatch();
  const {
    getData: { data, loadingBar, isFetching },
  } = useSelector((state) => state.score);
  const { data: dataStudent, isFetching: isFetchingStudent } = useSelector(
    (state) => state.informationStudent
  );

  const { search } = useLocation();
  useEffect(() => {
    dispatch(getScore(search));
    dispatch(getInformationStudent());
  }, [search]);

  useEffect(() => {
    const search = data?.result?.filter((items) => {
      return items.studentId.fullName
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    setSearchResultValue(search);
  }, [data, searchValue]);

  const columnName = [
    "Nama",
    "No Indentitas",
    "Kelas",
    "Pelajaran",
    "Kehadiran",
    "Tugas Satu",
    "Tugas Dua",
    "Tugas Tiga",
    "UTS",
    "UAS",
    "Hasil",
  ];
  return (
    <Grid loadingBarValue={loadingBar}>
      <div className="flex justify-between">
        <Search onChange={(e) => setSearchValue(e.target.value)} />
        <div className="space-x-3 flex items-center">
          <Filter classRooms={dataStudent?.result?.classRoom} />
          <Sort />
          <ButtonSlide addSlide={addSlide} setAddSlide={setAddSlide} />
          <Add addSlide={addSlide} setAddSlide={setAddSlide} title={"Tambah"}>
            <AddScoreItem
              asd={data}
              data={dataStudent}
              isFetching={isFetchingStudent}
              addSlide={addSlide}
              setAddSlide={setAddSlide}
            />
          </Add>
        </div>
      </div>

      {isFetching ? (
        <TableSkeleton />
      ) : (
        <div className="mt-10">
          <TableScore data={searchResultValue} columnName={columnName} />
          <div className="mt-3">
            <Pagination page={data?.page} />
          </div>
        </div>
      )}
    </Grid>
  );
}

export default Score;
