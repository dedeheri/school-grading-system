import insunmedal from "../../assets/images/insunmedal.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { verifyTeacherSignIn } from "../../context/action/login-action";

function Register() {
  const router = useNavigate();
  const dispatch = useDispatch();

  const [identityNumber, setIdentityNumber] = useState("");
  const {
    verifyUsers: { data: users, error, isFetching, next },
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
    <div className="grid grid-cols-1 md:grid-cols-3 font-roboto">
      {/* Image */}
      <div className="hidden md:block bg-black col-span-2">
        <div className="flex items-center justify-center min-h-screen">
          <img className="w-1/2" src={insunmedal} />
        </div>
      </div>
      <div className="md:mx-0 mx-7 space-y-5 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col">
          <p className="mb-4 font-medium text-2xl w-full md:w-1/2 mx-auto p">
            Untuk Melanjutkan pendaftaran, Anda harus memvalidasi Number
            Indititas. Jika tidak tersedia, silakan hubungi staf
          </p>

          {error && (
            <p className="font-medium text-red-500 text-xl w-full md:w-1/2 mx-auto">
              {error}
            </p>
          )}

          <div className="font-medium  text-xl w-full md:w-1/2 mx-auto">
            {users?.result?.fullName && <p>Name : {users?.result?.fullName}</p>}
          </div>
        </div>

        <form className="flex flex-col space-y-8 items-center">
          <Input
            width={"md:w-1/2 w-full"}
            type={"number"}
            title={"Nip"}
            placeholder={"Nip"}
            onChange={(e) => setIdentityNumber(e.target.value)}
          />

          {next ? (
            <Button
              width={"md:w-1/2 w-full"}
              onClick={handleSearch}
              title={"Next"}
            />
          ) : (
            <Button width={"md:w-1/2 w-full"} onClick={check} title={"Check"} />
          )}
        </form>
      </div>
      {/* form */}
    </div>
  );
}

export default Register;
