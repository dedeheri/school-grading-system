import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { setClassRoomList } from "../context/action/staff-action";

// ui
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineFilter } from "react-icons/ai";

function Filter({ extend }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: classRooms } = useSelector((state) => state.classRoomList);
  useEffect(() => {
    dispatch(setClassRoomList("?sort=-1"));
  }, []);

  const sort = (n) => {
    navigate({
      search: `${createSearchParams({ filter: n })}`,
    });
  };

  const day = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
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
                {classRooms?.result?.map((c, i) => (
                  <p
                    key={i}
                    onClick={() => sort(c.classRoom)}
                    className="pl-2 py-1 hover:bg-gray-200 cursor-pointer rounded-md font-medium"
                  >
                    {c.classRoom}
                  </p>
                ))}
              </div>
            </Menu.Item>
            {extend && (
              <Menu.Item>
                <div
                  className="
                  rounded-md w-full px-2 py-2 text-md"
                >
                  <h1 className="font-bold pl-2 ">Hari</h1>
                  {day.map((days, i) => (
                    <p
                      key={i}
                      onClick={() => sort(days)}
                      className="pl-2 py-1 hover:bg-gray-200 cursor-pointer rounded-md font-medium"
                    >
                      {days}
                    </p>
                  ))}
                </div>
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Filter;
