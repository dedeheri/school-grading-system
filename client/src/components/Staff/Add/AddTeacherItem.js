import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../../context/action/staff-action";
import Button from "../../Button";
import Input from "../../Input";

function AddTeacherItem() {
  // state form
  const [fullName, setFullName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [status, setStatus] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postelCode, setPostelCode] = useState("");

  // redux state
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    loadingBar,
    errorValidation,
    errorMessage,
    refreshPage,
  } = useSelector((state) => state.teacher);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTeacher(
        fullName,
        identityNumber,
        status,
        street,
        city,
        province,
        postelCode
      )
    );
  };

  return (
    <>
      {errorMessage && (
        <div className="space-y-1">
          <p className="bg-red-200 text-black font-medium p-1 px-3 rounded-md">
            {errorMessage}
          </p>
        </div>
      )}

      {errorValidation && (
        <div className="space-y-1">
          {errorValidation.map((err) => (
            <p className="bg-red-200 text-black font-medium p-1 px-3 rounded-md">
              {err.msg}
            </p>
          ))}
        </div>
      )}

      <div className="space-y-3 mt-3">
        <Input
          title={"Nama Lengkap"}
          placeholder={"Nama Lengkap"}
          type={"text"}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          title={"No Indititas"}
          placeholder={"No Indititas"}
          type={"number"}
          onChange={(e) => setIdentityNumber(e.target.value)}
        />
        <Input
          title={"Status"}
          placeholder={"Status"}
          type={"text"}
          onChange={(e) => setStatus(e.target.value)}
        />
        <Input
          title={"Jalan"}
          placeholder={"Jalan"}
          type={"text"}
          onChange={(e) => setStreet(e.target.value)}
        />
        <Input
          title={"Kota"}
          placeholder={"Kota"}
          type={"text"}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          title={"Provinsi"}
          placeholder={"Provinsi"}
          type={"text"}
          onChange={(e) => setProvince(e.target.value)}
        />
        <Input
          title={"Kode Pos"}
          placeholder={"Kode Pos"}
          type={"number"}
          onChange={(e) => setPostelCode(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button onClick={handleSubmit} width={"w-1/2"} title={"Tambahkan"} />
      </div>
    </>
  );
}

export default AddTeacherItem;
