import moment from "moment";
import React, { useState } from "react";

const TableAccountList = ({ data }) => {
  const [open, setOpen] = useState(false);
  const coulums = [
    "No",
    "Nama",
    "No Indititas",
    "Role",
    "Sunting",
    "Terdaftar",
  ];
  return (
    <div className="mt-3 font-roboto overflow-scroll scrollbar-hide">
      <table className="min-w-full table-fixed">
        <thead>
          <tr>
            {coulums.map((items, key) => (
              <th key={key} className="whitespace-nowrap text-md text-left">
                {items}
              </th>
            ))}
            <th className="relative">
              <span className="sr-only">action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => (
            <tr key={i} className="text-black">
              <td className="text-md whitespace-nowrap">{i + 1}</td>
              <td className="text-md whitespace-nowrap">{e.fullName}</td>
              <td className="text-md whitespace-nowrap">{e.identityNumber}</td>
              <td className="text-md whitespace-nowrap">{e.role}</td>
              <td className="text-md whitespace-nowrap">
                {moment(e.updatedAt, "YYYYMMDD").fromNow()}
              </td>
              <td className="text-md whitespace-nowrap">
                {moment(e.createdAt, "YYYYMMDD").fromNow()}
              </td>
              <td>
                <div className="flex space-x-1 relative">
                  <p
                    onClick={() => setOpen(true)}
                    className="hover:bg-green-400 transition duration-400 bg-green-300 p-1 cursor-pointer rounded-lg"
                  >
                    Edit
                  </p>
                  <p className="hover:bg-red-400 transition duration-400 bg-red-300 p-1 cursor-pointer rounded-lg">
                    Hapus
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAccountList;
