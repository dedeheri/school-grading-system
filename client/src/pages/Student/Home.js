import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import Grid from "../../components/Grid";
import TableSkeleton from "../../components/TableSkeleton";
import Table from "../../components/Student/Table";

function Home() {
  const { users: data, isFetching } = useSelector((state) => state.users);
  const columnName = ["Kode Jadwal", "Pelajaran", "Kelas", "Hari", "Waktu"];

  return (
    <Grid lodingBarValue={100}>
      <Banner isFetching={isFetching} name={data?.result?.fullName} />
      <h1 className="mt-10 mb-4 text-xl font-bold ">Jadwal</h1>
      {isFetching ? (
        <TableSkeleton />
      ) : (
        <Table data={data} columnName={columnName} />
      )}
    </Grid>
  );
}

export default Home;
