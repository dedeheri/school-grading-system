import React from "react";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";

// component
import Grid from "../../components/Grid";
function Me() {
  const { error, users, isFetching } = useSelector((state) => state.users);
  console.log(users);
  return (
    <Grid>
      <div className="flex justify-between">
        <div className="space-y-1 w-1/3">
          <p className=" p-1 font-semibold text-3xl rounded-lg">
            {users?.result?.fullName}
          </p>
          <p className=" p-1 font-semibold text-md rounded-lg">
            {users?.result?.identityNumber}
          </p>
          <p className=" p-1 font-semibold text-md rounded-lg">
            {users?.result?.status}
          </p>
          <p className="bg-gray-300 p-1 text-md rounded-lg">
            {users?.result?.address?.street +
              " " +
              users?.result?.address?.city +
              " " +
              users?.result?.address?.province +
              " " +
              users?.result?.address?.postelCode}
          </p>
        </div>

        <div className="cursor-pointer flex space-x-2 bg-green-300 h-8 rounded-lg p-1">
          <p className="font-medium text-xl">Edit</p>
          <BiEdit fontSize={25} />
        </div>
      </div>
    </Grid>
  );
}

export default Me;
