import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch } from "react-redux";
import { setDeleteStudent, setStudent } from "../context/action/staff-action";
import { useEffect } from "react";
import { FiEdit3, FiTrash } from "react-icons/fi";

function TableStudent({ columnName, list }) {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { search } = useLocation();
  const handleDetail = (id, fullName) => {
    router({
      pathname: "/staff/student/detail",
      search: `${createSearchParams({
        studentId: id,
        fullName: fullName,
      })}`,
    });
  };

  const handleUpdate = (id, fullName) => {
    router({
      pathname: "/staff/student/update",
      search: `${createSearchParams({
        studentId: id,
        fullName: fullName,
      })}`,
    });
  };

  const handleDelete = (id, fullName) => {
    confirmAlert({
      title: `Anda yakin untuk menghapus data, ${fullName}`,
      message: "Data tidak dapat diurungkan!",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(setDeleteStudent(id));
            dispatch(setStudent(search));
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
          {list?.map((list, key) => (
            <tr
              key={key}
              className="hover:bg-gray-100 text-black transition duration-400"
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {list.codeStudent}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                {list.identityNumber}
              </td>
              <td
                onClick={() => handleDetail(list._id, list.fullName)}
                className="text-md whitespace-nowrap px-3 cursor-pointer"
              >
                {list.fullName}
              </td>
              <td className="text-md whitespace-nowrap px-3 cursor-pointer">
                {list.classRoom}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                {list?.address?.street}, {list?.address?.city},{" "}
                {list?.address?.province}
              </td>
              <td>
                <div className="flex space-x-2 border-l ml-2 px-4">
                  <FiEdit3
                    fontSize={"18px"}
                    className="hover:text-green-500 cursor-pointer"
                    onClick={() => handleUpdate(list._id, list.fullName)}
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

export default TableStudent;
