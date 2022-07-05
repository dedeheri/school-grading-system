import { Fragment } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

// ui
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineFilter } from "react-icons/ai";

function Filter({ classRooms }) {
  const navigate = useNavigate();

  const sort = (n) => {
    navigate({
      search: `${createSearchParams({ filter: n })}`,
    });
  };

  return (
    <Menu as="div" className="relative inline-block">
      <div className=" flex items-center">
        <Menu.Button>
          <div className="cursor-pointer">
            <div className=" hidden border rounded-xl cursor-pointer md:flex items-center hover:bg-gray-100 transition duration-300 h-10">
              <div className="flex px-3 items-center">
                <AiOutlineFilter fontSize={"25px"} />
                <h1 className="ml-2 text-lg">Filter</h1>
              </div>
            </div>

            {/* mobile size */}
            <AiOutlineFilter fontSize={"25px"} className="md:hidden flex" />
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
                <h1 className="font-bold pl-2 ">Kelas</h1>
                {classRooms?.map(({ classRoom, _id }) => (
                  <p
                    key={_id}
                    onClick={() => sort(classRoom)}
                    className="pl-2 py-1 hover:bg-gray-200 cursor-pointer rounded-md font-medium"
                  >
                    {classRoom}
                  </p>
                ))}
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Filter;
