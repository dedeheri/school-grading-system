import React, { useState } from "react";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import Spin from "../../components/Spin";

// image
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { verifyAddPasswordStudent } from "../../context/action/student";
import { useLocation, useNavigate } from "react-router-dom";
import Back from "../../components/Back";
import AuthGrid from "../../components/AuthGrid";

function InputPasswordRegistrasi() {
  const navigate = useNavigate();
  const { search } = useLocation();
  // redux
  const dispatch = useDispatch();
  const {
    NEXT_REGISTRATION_STUDENT: { data, error, fetching, validation },
  } = useSelector((state) => state.authorization);

  // state
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handleAddPassword(e) {
    e.preventDefault();
    dispatch(
      verifyAddPasswordStudent(search, password, repeatPassword, navigate)
    );
  }

  console.log(data);
  return (
    <AuthGrid>
      <form
        onSubmit={handleAddPassword}
        className="flex flex-col my-10 space-y-4 items-center"
      >
        {error && <h1 className="text-red-500">{error?.message}</h1>}
        {validation?.validation && (
          <div className="bg-red-100 p-1 rounded-md w-full md:w-1/2 mx-auto">
            {validation?.validation?.map(({ msg }, i) => (
              <h1 key={i} className="font-base text-red-500 text-xl">
                {msg}
              </h1>
            ))}
          </div>
        )}

        <InputPassword
          title={"Kata Sandi"}
          placeholder={"••••••••••"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputPassword
          title={"Ulangi Kata Sandi"}
          placeholder={"••••••••••"}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        {fetching ? (
          <Spin />
        ) : (
          <Button width={"md:w-1/2 w-full"} title={"Kirim"} />
        )}
        <Back width={"md:w-1/2 w-full"} title={"Kembali ke Login"} />
      </form>
    </AuthGrid>
  );
}

export default InputPasswordRegistrasi;
