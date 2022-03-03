import { NavLink } from "react-router-dom";

// Icon
import { BiCalendarEvent, BiHome, BiBookReader } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdLockOpen } from "react-icons/md";

function SidebarItem() {
  return (
    <>
      <div className="w-48 flex pt-10 pl-1 bg-white h-screen flex-col items-center ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
              : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
          }
          to={"/staff"}
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
          to={"/staff/schedule"}
        >
          <div className="flex items-center ml-[px]">
            <BiCalendarEvent fontSize={"28px"} />
            <h1 className="text-xl ml-4">Jadwal</h1>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
              : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
          }
          to={"/staff/class"}
        >
          <div className="flex items-center ml-1">
            <SiGoogleclassroom fontSize={"22px"} />
            <h1 className="text-xl ml-5">Kelas</h1>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
              : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
          }
          to={"/staff/teacher"}
        >
          <div className="flex items-center ml-[1px]">
            <FaChalkboardTeacher fontSize={"26px"} />
            <h1 className="text-xl ml-5">Guru</h1>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
              : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
          }
          to={"/staff/staff"}
        >
          <div className="flex items-center ml-[2px]">
            <BiBookReader fontSize={"26px"} />
            <h1 className="text-xl ml-5">Staff</h1>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
              : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
          }
          to={"/staff/student"}
        >
          <div className="flex items-center ml-[3px]">
            <FiUser fontSize={"23px"} />
            <h1 className="text-xl ml-5">Siswa</h1>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black rounded-md pl-2 py-1 w-full font-bold"
              : "hover:bg-gray-200 text-black w-full rounded-md pl-2 py-1 transition duration-300"
          }
          to={"/staff/account?sort=Staff"}
        >
          <div className="flex items-center ml-[2px]">
            <MdLockOpen fontSize={"25px"} />
            <h1 className="text-xl ml-5">Akun</h1>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default SidebarItem;
