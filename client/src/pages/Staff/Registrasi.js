import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { registrationStaff } from "../../context/action/staff-action";

// components
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";
import AuthGrid from "../../components/AuthGrid";
import Spin from "../../components/Spin";
import Back from "../../components/Back";

function Registrasi() {
  // state
  const [fullName, setFullName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postelCode, setPostelCode] = useState("");

  // router
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    REGISTRATION_STAFF: { data, fetching, error },
  } = useSelector((state) => state.authorization);

  // handle submit
  const addStaff = (e) => {
    e.preventDefault();
    dispatch(
      registrationStaff(
        fullName,
        identityNumber,
        email,
        password,
        province,
        city,
        street,
        postelCode,
        navigate
      )
    );
  };

  return (
    <AuthGrid text="Registrasi Staff">
      {/* Image */}

      <form
        onSubmit={addStaff}
        className="flex flex-col space-y-4 items-center "
      >
        {error?.validation && (
          <div className="bg-red-100 p-1 rounded-md w-full ">
            {error?.validation?.map(({ msg }, i) => (
              <h1 key={i} className="font-base text-red-500 text-xl">
                {msg}
              </h1>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          <Input
            width={" w-full"}
            type={"number"}
            title={"No Identitas"}
            placeholder={"No Identitas"}
            onChange={(e) => setIdentityNumber(e.target.value)}
          />
          <Input
            width={" w-full"}
            type={"text"}
            title={"Nama Lengkap"}
            placeholder={"Nama Lengkap"}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            width={" w-full"}
            type={"email"}
            title={"Email"}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputPassword
            width={" w-full"}
            title={"Kata Sandi"}
            placeholder={"Kata Sandi"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            width={" w-full"}
            type={"text"}
            title={"Jalan"}
            placeholder={"Jalan"}
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            width={" w-full"}
            type={"text"}
            title={"Kota"}
            placeholder={"Kota"}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            width={" w-full"}
            type={"text"}
            title={"Provinsi"}
            placeholder={"Provinsi"}
            onChange={(e) => setProvince(e.target.value)}
          />
          <Input
            width={" w-full"}
            type={"number"}
            title={"Kode Pos"}
            placeholder={"Kode Pos"}
            onChange={(e) => setPostelCode(e.target.value)}
          />
        </div>
        {fetching ? <Spin /> : <Button width={" w-full"} title={"Kirim"} />}
        <Back
          width={" w-full"}
          title={"Kembali ke Login"}
          onClick={() => navigate("/")}
        />
      </form>
      {/* form */}
    </AuthGrid>
  );
}

export default Registrasi;
