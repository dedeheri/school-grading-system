import { useSelector } from "react-redux";
import Banner from "../../components/Banner";

// components
import Grid from "../../components/Grid";
import Table from "../../components/Teacher/Table";
import TableSkeleton from "../../components/TableSkeleton";

function Home() {
  // redux state
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
