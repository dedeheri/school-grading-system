import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { verifyTeacherSignIn } from "../../context/action/login-action";
import AuthGrid from "../../components/AuthGrid";

function Register() {
  const router = useNavigate();
  const dispatch = useDispatch();

  const [identityNumber, setIdentityNumber] = useState("");
  const {
    verifyUsers: { data: users, error, next },
  } = useSelector((state) => state.authorization);

  const check = async (e) => {
    e.preventDefault();
    dispatch(verifyTeacherSignIn(identityNumber));
  };

  const handleSearch = () => {
    router({
      pathname: "/signup/teacher/verify",
      search: `${createSearchParams({
        identityNumber: users?.result?.identityNumber,
      })}`,
    });
  };

  return (
    <AuthGrid text={"Registrasi Guru"}>
      <form className="flex flex-col space-y-8 items-center">
        <div className="space-y-3">
          <p className="font-base text-lg text-gray-600 w-full">
            Untuk Melanjutkan pendaftaran, Anda harus memvalidasi Number
            Indititas. Jika tidak tersedia, silakan hubungi staf
          </p>
          {error?.message && (
            <div className="bg-red-100 p-1 rounded-md w-full ">
              <h1 className="font-base text-red-500 text-lg">
                {error?.message}
              </h1>
            </div>
          )}

          {users?.result && (
            <div className="font-medium  text-lg w-full  bg-green-100 p-1 rounded-md">
              <p className="text-green-700">Nama : {users?.result?.fullName}</p>
              <p className="text-green-700">
                No Indentitas : {users?.result?.identityNumber}
              </p>
            </div>
          )}
        </div>
        <Input
          width={"w-full"}
          type={"number"}
          title={"Nip"}
          placeholder={"Nip"}
          onChange={(e) => setIdentityNumber(e.target.value)}
        />

        {next ? (
          <Button width={"w-full"} onClick={handleSearch} title={"Next"} />
        ) : (
          <Button width={"w-full"} onClick={check} title={"Check"} />
        )}
      </form>
    </AuthGrid>
  );
}

export default Register;
