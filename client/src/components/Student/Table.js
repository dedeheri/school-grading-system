import React from "react";

function Table({ columnName, data }) {
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
          {data?.result?.task?.map((c) => (
            <tr
              key={c._id}
              className="transition border-b duration-300 hover:bg-gray-100 text-black "
            >
              <td className="text-md whitespace-nowrap px-3 p-1">
                {c.teacher}
              </td>

              <td className="text-md whitespace-nowrap px-3 p-1">{c.course}</td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {c.attendance}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">{c.bcOne}</td>
              <td className="text-md whitespace-nowrap px-3 p-1">{c.bcTwo}</td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {c.bcThree}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">{c.bcFour}</td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {c.midtermExam}
              </td>
              <td className="text-md whitespace-nowrap px-3 p-1">
                {c.finalExams}
              </td>
              <td
                className={`text-md whitespace-nowrap px-3 p-1 ${
                  c.avarage < 60 ? "text-red-600" : "text-black"
                }`}
              >
                {c.avarage.toString().substring(0, 4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
