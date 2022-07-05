import React from "react";

function Back({ width, title, ...props }) {
  return (
    <div
      {...props}
      className={`${width} px-9 text-center border rounded-xl cursor-pointer hover:bg-gray-100 transition duration-300`}
    >
      <div className="h-11">
        <h1 className="flex justify-center pt-3 px-3">{title}</h1>
      </div>
    </div>
  );
}

export default Back;
