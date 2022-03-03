import React from "react";

// UI
import { FiEdit3, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";

import { createSearchParams, useNavigate } from "react-router-dom";
function TableScore({ columnName, data }) {
  const navigate = useNavigate();
  const handleDelete = (fullName, id) => {
    confirmAlert({
      title: `Anda yakin untuk menghapus data, ${fullName}?`,
      message: "Data tidak dapat diurungkan!",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // dispatch(setDeleteClassRoom(id));
            // dispatch(setClassRoomList(search));
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const handleUpdate = (studentId, taskId) => {
    navigate({
      pathname: "/teacher/score/update",
      search: `${createSearchParams({
        studentId,
        taskId,
      })}`,
    });
  };

  return (
    <div className="border rounded-xl font-roboto overflow-scroll scrollbar-hide">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            {columnName?.map((items, key) => (
              <th
                key={key}
                className="whitespace-nowrap text-md py-3 px-3 text-left "
              >
                {items}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((first, i) => (
            <tr
              key={i}
              className="transition border-b duration-300 hover:bg-gray-100 text-black "
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.studentId.fullName}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.studentId.identityNumber}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.studentId.classRoom}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.course}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.attendance}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.taskOne}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.taskTwo}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.taskThree}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.midtermExam}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {first.finalExams}
              </td>
              <td
                className={`text-md whitespace-nowrap px-3 p-1 ${
                  first.avarage < 60 ? "text-red-600" : "text-black"
                }`}
              >
                {first.avarage}
              </td>

              <td>
                <div className="flex space-x-2 border-l pl-4 pr-2">
                  <FiEdit3
                    fontSize={"18px"}
                    className="hover:text-green-500 cursor-pointer"
                    onClick={() => handleUpdate(first.studentId._id, first._id)}
                  />
                  <FiTrash
                    fontSize={"18px"}
                    className="hover:text-red-500 cursor-pointer"
                    onClick={() =>
                      handleDelete(first.studentId.fullName, first._id)
                    }
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

export default TableScore;
