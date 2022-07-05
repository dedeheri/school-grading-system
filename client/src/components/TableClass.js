import { useDispatch } from "react-redux";
import {
  setClassRoomList,
  setDeleteClassRoom,
} from "../context/action/staff-action";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

// UI
import { FiEdit3, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";

function TableClass({ coulums, list }) {
  const dispatch = useDispatch((state) => state.clasRoomList);
  const navigate = useNavigate();

  const { search } = useLocation();

  const handleDelete = (id, classRoom) => {
    confirmAlert({
      title: `Anda yakin untuk menghapus data, ${classRoom}?`,
      message: "Data tidak dapat diurungkan!",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(setDeleteClassRoom(id));
            dispatch(setClassRoomList(search));
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleUpdate = (id) => {
    navigate({
      pathname: "/staff/class/update",
      search: `${createSearchParams({
        classId: id,
      })}`,
    });
  };
  return (
    <div className="border rounded-xl font-roboto overflow-scroll scrollbar-hide">
      <table className="min-w-full table-fixed">
        <thead className="border-b">
          <tr>
            {coulums.map((items, key) => (
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
              className="hover:bg-gray-100 text-black transition border-b duration-400"
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {list.codeClass}
              </td>
              <td className="text-md whitespace-nowrap px-3">
                {list.classRoom}
              </td>
              <td className="text-md whitespace-nowrap px-3 cursor-pointer">
                {list.homeRoomTeacher}
              </td>
              <td>
                <div className="flex space-x-2 border-l pl-4">
                  <FiEdit3
                    fontSize={"18px"}
                    className="hover:text-green-500 cursor-pointer"
                    onClick={() => handleUpdate(list._id)}
                  />
                  <FiTrash
                    fontSize={"18px"}
                    className="hover:text-red-500 cursor-pointer"
                    onClick={() => handleDelete(list._id, list.classRoom)}
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

export default TableClass;
