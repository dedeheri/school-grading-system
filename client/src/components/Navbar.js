import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// headlesUI
import { Menu, Transition } from "@headlessui/react";

// icons
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

// redux
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_DATA_USER } from "../context/action/action-type";

// image
import insunmedallogo from "../assets/images/insunmedal.png";

function Navbar({ menu, setMenu }) {
  const { isFetching, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: REMOVE_DATA_USER });
    Cookies.remove("secure-To");
    Cookies.remove("uid");
    Cookies.remove("secure-2nd");
    navigate("/");
  };

  return (
    <div className="z-50 border-b sticky top-0 h-14 bg-white font-roboto">
      <div className=" max-w-[90rem] mx-auto flex justify-between items-center py-2">
        <div className="cursor-pointer flex items-center ml-3">
          <img src={insunmedallogo} className="w-10" />
        </div>
        <div className="flex mr-3">
          {isFetching ? (
            <div className="w-32 h-6 rounded-xl mt-2 bg-gray-200 animate-pulse "></div>
          ) : (
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block">
                <div className=" flex items-center">
                  <Menu.Button>
                    <div className="cursor-pointer">
                      <div className=" rounded-xl  cursor-pointer md:flex items-center hover:bg-gray-100 transition duration-300">
                        <div className="flex space-x-1 p-1 px-2 items-center">
                          <h2 className="text-xl">{users?.result?.fullName}</h2>
                          <IoIosArrowDown fontSize={20} />
                        </div>
                      </div>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                      <Menu.Item>
                        <div className=" cursor-pointer rounded-md w-full px-2 py-2 text-md">
                          <h1
                            onClick={() => navigate("me")}
                            className="font-base pl-2 hover:bg-gray-100 rounded-xl p-1"
                          >
                            Profil
                          </h1>
                          <h1
                            onClick={handleLogOut}
                            className="font-base pl-2 hover:bg-gray-100 rounded-xl p-1"
                          >
                            Keluar
                          </h1>
                        </div>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}

          {!menu ? (
            <div
              onClick={() => setMenu(!menu)}
              className="block md:hidden cursor-pointer hover:text-gray-500 p-1 rounded-full"
            >
              <HiMenuAlt2 fontSize={"30px"} />
            </div>
          ) : (
            <div
              onClick={() => setMenu(!menu)}
              className="block md:hidden cursor-pointer hover:text-gray-500 p-1 rounded-full"
            >
              <IoClose fontSize={"30px"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
