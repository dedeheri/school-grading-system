import React, { useState } from "react";

// components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Spin from "../../components/Spin";
import Back from "../../components/Back";

// image
import logo from "../../assets/images/logo.png";

// redux
import { useSelector, useDispatch } from "react-redux";
import { verifyNoIndentityStudent } from "../../context/action/student";
import { createSearchParams, useNavigate } from "react-router-dom";

function Registrasi() {
  const dispatch = useDispatch();
  const router = useNavigate();
  const {
    REGISTRATION_STUDENT: { data, fetching, error, next },
  } = useSelector((state) => state.authorization);

  // state
  const [identityNumber, setIndentityNumber] = useState("");

  // handle information
  function handleCheckIndentityNumber(e) {
    e.preventDefault();
    dispatch(verifyNoIndentityStudent(identityNumber));
  }

  const handleSearch = () => {
    router({
      pathname: "/signup/student/verify",
      search: `${createSearchParams({
        identityNumber: data?.result?.identityNumber,
      })}`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 font-roboto">
      {/* Image */}
      <div className="hidden md:block bg-black col-span-2">
        <div className="flex items-center justify-center min-h-screen">
          <img className="w-1/2" src={logo} />
        </div>
      </div>
      <div className="md:mx-0 mx-7 space-y-5 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col">
          {data?.result ? (
            <p className="mb-4 font-medium text-gray-500 text-2xl w-full md:w-1/2 mx-auto p">
              Data ditemukan
            </p>
          ) : (
            <p className="mb-4 font-medium text-gray-500 text-2xl w-full md:w-1/2 mx-auto p">
              Untuk Melanjutkan pendaftaran, Anda harus memvalidasi Number
              Indititas. Jika tidak tersedia, silakan hubungi staff
            </p>
          )}

          {error?.message && (
            <div className="bg-red-100 p-1 rounded-md w-full md:w-1/2 mx-auto">
              <h1 className="font-base text-red-500 text-xl">
                {error?.message}
              </h1>
            </div>
          )}

          {data?.result && (
            <div className="font-medium  text-xl w-full md:w-1/2 mx-auto bg-green-100 p-1 rounded-md">
              <p>Nama : {data?.result?.fullName}</p>
              <p>No Indentitas : {data?.result?.identityNumber}</p>
              <p>Kelas : {data?.result?.classRoom}</p>
            </div>
          )}
        </div>

        <form
          onSubmit={handleCheckIndentityNumber}
          className="flex flex-col space-y-8 items-center"
        >
          <Input
            width={"md:w-1/2 w-full"}
            type={"number"}
            title={"No Identitas"}
            placeholder={"No Identitas"}
            onChange={(e) => setIndentityNumber(e.target.value)}
          />

          {next ? (
            <Button
              width={"md:w-1/2 w-full"}
              onClick={handleSearch}
              title={"Selanjutnya"}
            />
          ) : fetching ? (
            <Spin />
          ) : (
            <Button width={"md:w-1/2 w-full"} title={"Validasi"} />
          )}

          {error?.message && (
            <Back
              width={"md:w-1/2 w-full"}
              title={"Kemabli ke Login"}
              onClick={() => router("/")}
            />
          )}
        </form>
      </div>
      {/* form */}
    </div>
  );
}

export default Registrasi;
