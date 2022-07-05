import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../../components/Grid";
import Search from "../../components/Search";
import Sort from "../../components/Sort";
import Table from "../../components/Student/Table";
import TableSkeleton from "../../components/TableSkeleton";
import Filter from "../../components/Teacher/Filter";
import { getScoreStudent } from "../../context/action/student";

function Score() {
  const dispatch = useDispatch();
  const {
    GET: { data, loading, loadingBar, error },
  } = useSelector((state) => state.scoreStudent);

  useEffect(() => {
    dispatch(getScoreStudent());
  }, [dispatch]);

  const [searchValue, setSearchValue] = useState("");

  const [searchResultValue, setSearchResultValue] = useState([]);

  // useEffect(() => {
  //   const search = data?.result?.filter((items) => {
  //     return items?.studentId?.fullName
  //       .toLowerCase()
  //       .includes(searchValue.toLowerCase());
  //   });

  //   setSearchResultValue(search);
  // }, [data, searchValue]);

  const columnName = [
    "Guru",
    "Pelajaran",
    "Kehadiran",
    "KD Satu",
    "KD Dua",
    "KD Tiga",
    "KD Empat",
    "UTS",
    "UAS",
    "Hasil",
  ];

  return (
    <Grid>
      <div className="flex justify-between">
        <Search onChange={(e) => setSearchValue(e.target.value)} />
        <div className="space-x-3 flex items-center">
          <Filter />
          <Sort />
        </div>
      </div>

      {loading ? (
        <TableSkeleton />
      ) : (
        <div className="mt-10">
          <Table data={data} columnName={columnName} />
        </div>
      )}
    </Grid>
  );
}

export default Score;
