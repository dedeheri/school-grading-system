import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { setDeleteTeacher, setTeacher } from "../context/action/staff-action";
import { useDispatch } from "react-redux";

import { FiEdit3, FiTrash } from "react-icons/fi";

function TableTeacher({ columnName, list }) {
  const dispatch = useDispatch();
  const router = useNavigate();

  const detailTeacher = (id, name) => {
    router({
      pathname: `/staff/teacher/detail`,
      search: `${createSearchParams({
        teacherId: id,
        fullName: name,
      })}`,
    });
  };

  const updateTeacher = (id, fullName) => {
    router({
      pathname: "/staff/teacher/update",
      search: `${createSearchParams({
        teacherId: id,
        fullName: fullName,
      })}`,
    });
  };

  const { search } = useLocation();

  // handleDelete
  const handleDelete = (id, name) => {
    confirmAlert({
      title: `Anda yakin untuk menghapus data, ${name}`,
      message: "Data tidak dapat diurungkan!",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(setDeleteTeacher(id));
            dispatch(setTeacher(search));
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="border rounded-xl font-roboto overflow-scroll scrollbar-hide">
      <table className="min-w-full table-fixed">
        <thead>
          <tr className="border-b">
            {columnName?.map((items, key) => (
              <th
                key={key}
                className="whitespace-nowrap text-md py-3 px-3 text-left"
              >
                {items}
              </th>
            ))}
            <th className="relative">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {list?.map((list) => (
            <tr
              key={list._id}
              className="hover:bg-gray-100 border-b text-black transition duration-400"
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {list.codeTeacher}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                {list.identityNumber}
              </td>
              <td
                onClick={() => detailTeacher(list._id, list.fullName)}
                className="text-md whitespace-nowrap px-3 cursor-pointer"
              >
                {list.fullName}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                {list.address.street} {list.address.city + " "}
                {list.address.province + " "}
                {list.address.postelCode}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                <p className="bg-purple-100 rounded-full px-2">{list.status}</p>
              </td>
              <td>
                <div className="flex space-x-2 border-l ml-2 px-4">
                  <FiEdit3
                    fontSize={"18px"}
                    className="hover:text-green-500 cursor-pointer"
                    onClick={() => updateTeacher(list._id, list.fullName)}
                  />
                  <FiTrash
                    fontSize={"18px"}
                    className="hover:text-red-500 cursor-pointer"
                    onClick={() => handleDelete(list._id, list.fullName)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTeacher;
