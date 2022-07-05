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
          {data?.result?.schedule?.map(
            ({ codeClass, course, day, time, classRoom, _id }) => (
              <tr
                key={_id}
                className="transition border-b duration-300 hover:bg-gray-100 text-black "
              >
                <td className="text-md whitespace-nowrap px-3 p-1">
                  {codeClass}
                </td>
                <td className="text-md whitespace-nowrap px-3 p-1">{course}</td>
                <td className="text-md whitespace-nowrap px-3 p-1">
                  {classRoom}
                </td>
                <td className="text-md whitespace-nowrap px-3 p-1">{day}</td>
                <td className="text-md whitespace-nowrap px-3 p-1">{time}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
