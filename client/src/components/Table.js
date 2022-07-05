import { confirmAlert } from "react-confirm-alert";
import { useDispatch } from "react-redux";
import { setDelateSchedule, setSchedule } from "../context/action/staff-action";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

// UI
import { FiEdit3, FiTrash } from "react-icons/fi";

const Table = ({ columnName, data, on }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleUpdate = (scheduleId) => {
    navigate({
      pathname: "/staff/schedule/update",
      search: `${createSearchParams({
        scheduleId: scheduleId,
      })}`,
    });
  };

  const handleDelete = (id, fullName) => {
    confirmAlert({
      title: `Anda yakin untuk menghapus data, ${fullName}? `,
      message: "Data tidak dapat diurungkan!",
      buttons: [
        {
          label: "Iya",
          onClick: () => {
            dispatch(setDelateSchedule(id));
            dispatch(setSchedule(search));
          },
        },
        {
          label: "Tidak",
        },
      ],
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
            <th className="relative">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items) => (
            <tr
              key={items._id}
              className="transition border-b duration-300 hover:bg-gray-100 text-black "
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {items.codeClass}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {items.teacherId.fullName}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {items.classRoom}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {items.course}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {items.day}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {items.time}
              </td>
              {on && (
                <td>
                  <div className="flex space-x-2 border-l px-4">
                    <FiEdit3
                      fontSize={"18px"}
                      className="hover:text-green-500 cursor-pointer"
                      onClick={() => handleUpdate(items._id)}
                    />
                    <FiTrash
                      fontSize={"18px"}
                      className="hover:text-red-500 cursor-pointer"
                      onClick={() =>
                        handleDelete(items._id, items.teacherId.fullName)
                      }
                    />
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
