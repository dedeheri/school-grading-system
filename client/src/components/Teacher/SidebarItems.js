import React from "react";
import { BiHome } from "react-icons/bi";
import { MdFormatListNumbered } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SidebarItems() {
  return (
    <div className="w-48 flex pt-10 pl-1 bg-white h-screen flex-col items-center ">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
            : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
        }
        to={"/teacher"}
        end={true}
      >
        <div className="flex items-center">
          <BiHome fontSize={"28px"} />
          <h1 className=" text-xl ml-4">Beranda</h1>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
            : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
        }
        to={"/teacher/score"}
      >
        <div className="flex items-center ml-[px]">
          <MdFormatListNumbered fontSize={"28px"} />
          <h1 className="text-xl ml-4">Nilai</h1>
        </div>
      </NavLink>
    </div>
  );
}

export default SidebarItems;
