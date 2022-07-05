import React from "react";

import logo from "../assets/images/logo.png";

function AuthGrid({ text, children }) {
  return (
    <div className="max-w-md mx-auto min-h-screen flex items-center font-roboto p-2 ">
      {/* Image */}
      <div className="w-full p-4 border rounded-2xl space-y-5">
        <img src={logo} alt="logo" className="w-16 mx-auto" />
        <h1 className="font-medium text-2xl text-center">{text}</h1>
        {children}
      </div>
    </div>
  );
}

export default AuthGrid;
