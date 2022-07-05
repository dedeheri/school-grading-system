import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import InputPassword from "../components/InputPassword";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../context/action/login-action";
import AuthGrid from "../components/AuthGrid";

function Login() {
  const [identityNumber, setIdentityNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const {
    login: { error, fetching },
  } = useSelector((state) => state.authorization);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLogin(identityNumber, password, navigate));
  };

  return (
    <AuthGrid text={"Login"}>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col space-y-3">
          {error?.message && (
            <div className="bg-red-100 p-1 rounded-md w-full">
              <h1 className="font-base text-red-500 text-xl">
                {error?.message}
              </h1>
            </div>
          )}
          <Input
            width={"w-full"}
            type={"number"}
            title={"No Identitas"}
            placeholder={"No Identitas"}
            onChange={(e) => setIdentityNumber(e.target.value)}
          />
          <div className="w-full space-y-2">
            <InputPassword
              title={"Kata Sandi"}
              placeholder={"••••••••"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>
              <Link
                to={"/forget-password"}
                className="font-medium text-lg text-gray-600 hover:underline hover:text-black"
              >
                Lupa Kata Sandi?
              </Link>
            </button>
          </div>
        </div>

        <div className="flex w-full mt-10 justify-between items-center">
          {/* popper */}

          <Popover className="relative">
            <Popover.Button className="text-lg hover:bg-gray-100 p-2 rounded">
              <span>Buat Akun</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white z-10  w-52 max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-2 flex flex-col">
                    <Link to={"/signup/staff"}>
                      <h1 className="text-xl hover:bg-gray-100 p-1 rounded-md duration-200">
                        Staff
                      </h1>
                    </Link>
                    <Link to={"/signup/teacher"}>
                      <h1 className="text-xl hover:bg-gray-100 p-1 rounded-md duration-200">
                        Guru
                      </h1>
                    </Link>
                    <Link to={"/signup/student"}>
                      <h1 className="text-xl hover:bg-gray-100 p-1 rounded-md duration-200">
                        Siswa
                      </h1>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* end popper */}

          <div>
            {fetching ? (
              <Button width={"w-full"} title={"Loading..."} />
            ) : (
              <Button width={"w-full"} title={"Masuk"} />
            )}
          </div>
        </div>
      </form>
    </AuthGrid>
  );
}

export default Login;
