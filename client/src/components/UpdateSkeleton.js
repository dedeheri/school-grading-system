function UpdateSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex space-x-3 ">
        <div className="bg-gray-100 h-4 w-full  rounded-xl"></div>
        <div className="bg-gray-100 h-4 w-full  rounded-xl"></div>
        <div className="bg-gray-100 h-4 w-full  rounded-xl"></div>
        <div className="bg-gray-100 h-4 w-full  rounded-xl"></div>
      </div>
      <div className="flex space-x-3 mt-4">
        <div className="bg-gray-100 h-10 w-full  rounded-xl"></div>
        <div className="bg-gray-100 h-10 w-full  rounded-xl"></div>
        <div className="bg-gray-100 h-10 w-full  rounded-xl"></div>
        <div className="bg-gray-100 h-10 w-full  rounded-xl"></div>
      </div>
      <div className="flex space-x-3 justify-end mt-4">
        <div className="bg-gray-100 h-10 w-40 rounded-xl"></div>
        <div className="bg-gray-100 h-10 w-40 rounded-xl"></div>
      </div>
    </div>
  );
}

export default UpdateSkeleton;
