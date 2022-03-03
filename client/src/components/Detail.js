import { useSelector } from "react-redux";

function Detail({ data, province }) {
  const columnName = ["Kode Jadwal", "Pelajaran", "Kelas", "Hari", "Waktu"];
  return (
    <>
      <p className="text-3xl font-bold ">{data.name}</p>
      <div className="flex mt-5 space-x-2 overflow-x-scroll whitespace-nowrap scrollbar-hide">
        <div className="bg-yellow-200 rounded-xl flex items-center px-4 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
          <p className="text-xl mx-1">{data.identityNumber}</p>
        </div>
        <div className="bg-purple-200 rounded-xl flex items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0zM12.532 5l1.666 2-1.666 2H2V5h10.532z" />
          </svg>
          <p className="text-xl mx-1 ">{data?.address?.street}</p>
          <p className="text-xl mx-1 ">{data?.address?.city}</p>
          <p className="text-xl mx-1 ">{data?.address?.province}</p>
          <p className="text-xl mx-1 ">{data?.address?.postelCode}</p>
        </div>
        <div className="bg-blue-200 rounded-xl flex items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
          </svg>
          <p className="text-xl mx-1 ">{data.status}</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="border rounded-xl font-roboto overflow-scroll scrollbar-hide">
          <table className="min-w-full table-fixed">
            <thead className="border-b">
              <tr>
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
              {data.schedule?.map((list) => (
                <tr
                  key={list._id}
                  className="hover:font-bold transition duration-300  "
                >
                  <td className="text-md whitespace-nowrap px-3 p-1">
                    {list.codeClass}
                  </td>
                  <td className="text-md whitespace-nowrap px-3 p-1">
                    {list.classRoom}
                  </td>
                  <td className="text-md whitespace-nowrap px-3 p-1">
                    {list.course}
                  </td>
                  <td className="text-md whitespace-nowrap px-3 p-1">
                    {list.day}
                  </td>
                  <td className="text-md whitespace-nowrap px-3 p-1">
                    {list.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Detail;
