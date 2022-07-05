import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

import { jsPDF } from "jspdf";
import "jspdf-autotable";

function Print({ columnName, tableData }) {
  const data = [];
  const generetedData = (tables) => {
    tables?.map((table) => {
      data.push([
        table.codeClass,
        table.teacherId.fullName,
        table.classRoom,
        table.course,
        table.day,
        table.time,
      ]);
    });
  };

  generetedData(tableData);

  const handlePrint = () => {
    const pdf = new jsPDF();
    pdf.text(" ", 10, 10);
    pdf.autoTable({
      theme: "grid",
      columns: columnName,
      body: data,
    });
    pdf.save("jadwal.pdf");
  };
  return (
    <div className="cursor-pointer">
      <div className="hidden border rounded-xl cursor-pointer md:flex items-center hover:bg-gray-100 transition duration-300 h-10 ">
        <div onClick={handlePrint} className="flex px-3 items-center">
          <HiOutlineDocumentDownload fontSize={"25px"} />
          <h1 className="ml-2 text-lg">Simpan</h1>
        </div>
      </div>
      <HiOutlineDocumentDownload fontSize={"25px"} className="md:hidden flex" />
    </div>
  );
}

export default Print;
