import React from "react";
import Grid from "../../components/Grid";
import Input from "../../components/Input";

function UpdateScore() {
  return (
    <Grid>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
        <Input title={"Siswa"} />
      </div>
    </Grid>
  );
}

export default UpdateScore;
