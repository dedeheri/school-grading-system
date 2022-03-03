function Button({ title, width, ...props }) {
  return (
    <div
      {...props}
      className={`${width} text-center bg-black rounded-xl cursor-pointer hover:bg-gray-600 transition duration-300`}
    >
      <button type="submit" className="text-white h-11">
        <div className="flex items-center px-3">{title}</div>
      </button>
    </div>
  );
}

export default Button;
