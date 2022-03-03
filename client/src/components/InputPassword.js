import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

function InputPassword({ title, placeholder, ...props }) {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col md:w-1/2 w-full font-roboto ">
      <label className="font-medium text-xl">{title}</label>
      <div className="flex justify-between items-center mt-3 px-4 border rounded-xl hover:bg-gray-100 transition duration-300">
        <input
          type={show ? "password" : "text"}
          {...props}
          className="h-11 text-sm outline-none w-full bg-transparent"
          placeholder={placeholder}
        />
        {!show ? (
          <EyeIcon
            onClick={() => setShow(!show)}
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
        ) : (
          <EyeOffIcon
            onClick={() => setShow(!show)}
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default InputPassword;
