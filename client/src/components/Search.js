import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
function Search({ ...props }) {
  const [openField, setOpenField] = useState(false);

  return (
    <>
      <div className="border h-10 rounded-xl hidden md:flex px-3 items-center hover:bg-gray-100 trasition duration-300">
        <BiSearchAlt fontSize={"25px"} />
        <input
          type={"text"}
          {...props}
          className="mx-2 h-10 outline-none bg-transparent text-medium"
          placeholder="Pencarian"
        />
      </div>

      <div className="flex items-center md:hidden">
        <BiSearchAlt
          className="cursor-pointer"
          onClick={() => setOpenField(!openField)}
          fontSize={"25px"}
        />

        {openField && (
          <input
            type={"text"}
            {...props}
            className="ml-3 outline-none bg-transparent text-medium border-b animate-slide-in"
            placeholder="Pencarian"
          />
        )}
      </div>
    </>
  );
}

export default Search;
