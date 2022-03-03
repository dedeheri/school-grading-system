import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import insunmedal from "../../assets/images/insunmedal.png";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import { setVerifyNextStep } from "../../context/action/login-action";
function Verify() {
  const dispatch = useDispatch();
  const {
    verifyUsers: { errorNextStep: error, errorAccountHashReady },
  } = useSelector((state) => state.authorization);
  const { search } = useLocation();
  const [repeatPassword, setRepeatPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const router = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setErrorPassword("Password do not match");
    }

    dispatch(setVerifyNextStep(search, password, router));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 font-roboto">
      {/* Image */}
      <div className="hidden md:block bg-black col-span-2">
        <div className="flex items-center justify-center min-h-screen">
          <img className="w-1/2" src={insunmedal} />
        </div>
      </div>
      <div className="md:mx-0 mx-7 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl my-10 text-center">
            Sign Up Teacher
          </h1>
        </div>

        <form className="flex flex-col my-10 space-y-4 items-center">
          {errorPassword && (
            <span className="text-red-500">{errorPassword}</span>
          )}
          {errorAccountHashReady && (
            <span className="text-red-500">{errorAccountHashReady}</span>
          )}

          {error && (
            <span className="text-red-500">{error.map(({ msg }) => msg)}</span>
          )}

          <InputPassword
            title={"Password"}
            placeholder={"••••••••••"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputPassword
            title={"Repeat Password"}
            placeholder={"••••••••••"}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {errorAccountHashReady ? (
            <Button
              width={"md:w-1/2 w-full"}
              onClick={() => router("/")}
              title={"Back to sign in"}
            />
          ) : (
            <Button
              width={"md:w-1/2 w-full"}
              onClick={handleSubmit}
              title={"Submit"}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Verify;
