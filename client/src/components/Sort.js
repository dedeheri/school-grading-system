import React, { Fragment } from "react";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { AiOutlineSortAscending } from "react-icons/ai";

function Sort() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSort = (by) => {
    navigate({
      pathname: location.pathname,
      search: `${createSearchParams({
        sort: by,
      })}`,
    });
  };

  return (
    <Menu as="div" className="relative inline-block">
      <div className=" flex items-center">
        <Menu.Button>
          <div className="cursor-pointer">
            <div className=" hidden border rounded-xl cursor-pointer md:flex items-center hover:bg-gray-100 transition duration-300 h-10">
              <div className="flex px-3 items-center">
                <AiOutlineSortAscending fontSize={"25px"} />
                <h1 className="ml-2 text-lg">Sort</h1>
              </div>
            </div>

            {/* mobile size */}
            <AiOutlineSortAscending
              fontSize={"25px"}
              className="md:hidden flex"
            />
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
              <div
                className="
                  rounded-md w-full px-2 py-2 text-md"
              >
                <h1
                  onClick={() => {
                    handleSort(1);
                  }}
                  className="pl-2 py-1 hover:bg-gray-200 cursor-pointer rounded-md font-medium"
                >
                  Terbaru
                </h1>
                <h1
                  onClick={() => {
                    handleSort(-1);
                  }}
                  className="pl-2 py-1 hover:bg-gray-200 cursor-pointer rounded-md font-medium"
                >
                  Terlama
                </h1>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Sort;
