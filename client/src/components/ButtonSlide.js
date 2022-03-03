import React from "react";
import { GrChapterAdd } from "react-icons/gr";

function ButtonSlide({ addSlide, setAddSlide }) {
  return (
    <div className="cursor-pointer" onClick={() => setAddSlide(!addSlide)}>
      <div className=" hidden border rounded-xl cursor-pointer md:flex items-center hover:bg-gray-100 transition duration-300 h-10">
        <div className="flex px-3 items-center">
          <GrChapterAdd fontSize={"20px"} />
          <h1 className="ml-2 text-lg">Tambah</h1>
        </div>
      </div>

      {/* mobile size */}
      <GrChapterAdd fontSize={"20px"} className="w-7 md:hidden flex" />
    </div>
  );
}

export default ButtonSlide;
