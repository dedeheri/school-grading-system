function Input({ title, placeholder, type, width, red, ...props }) {
  return (
    <div className={`${width} flex flex-col rounded-md font-roboto`}>
      <label className="block text-lg font-medium text-gray-700">{title}</label>
      <input
        type={type}
        {...props}
        className=" h-11 text-sm outline-none border rounded-lg px-3 mt-1 hover:bg-gray-100 transition duration-300"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
