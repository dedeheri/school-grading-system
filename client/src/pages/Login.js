import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import insunmedal from "../assets/images/insunmedal.png";
import Button from "../components/Button";
import InputPassword from "../components/InputPassword";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../context/action/login-action";

function Login() {
  const [identityNumber, setIdentityNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state
  const { users, error, isFetching } = useSelector(
    (state) => state.authorization
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLogin(identityNumber, password, navigate));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 font-roboto">
      {/* Image */}
      <div className="hidden md:block bg-black col-span-2">
        <div className="flex items-center justify-center min-h-screen">
          <img className="w-1/2" src={insunmedal} />
        </div>
      </div>
      {/* form */}
      <div className="mx-4 md:mx-0 space-y-5 flex flex-col justify-center min-h-screen">
        <h1 className="font-bold text-4xl mb-20 text-center">Masuk</h1>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col space-y-3 items-center">
            {error && (
              <p className="text-md text-red-400 font-medium">{error}</p>
            )}
            <Input
              width={"md:w-1/2 w-full"}
              type={"number"}
              title={"No Identitas"}
              placeholder={"No Identitas"}
              onChange={(e) => setIdentityNumber(e.target.value)}
            />
            <InputPassword
              title={"Kata Sandi"}
              placeholder={"••••••••"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center mt-5">
            <Button width={"md:w-1/2 w-full"} title={"Masuk"} />
          </div>
        </form>
        <h1 className="font-bold text-2xl text-center">Buat Akun</h1>
        {/* button */}
        <div className="items-center flex flex-col space-y-3">
          <Button
            width={"md:w-1/2 w-full"}
            onClick={() => navigate("signup/teacher")}
            title={"Guru"}
          />
          <Button width={"md:w-1/2 w-full"} title={"Murid"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
