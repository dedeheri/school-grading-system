import TableSkeleton from "./TableSkeleton";

function DetailSkeleton() {
  return (
    <div className="animate-pulse">
      <p className="w-40 h-8 bg-gray-100 rounded-xl"></p>
      <div className="flex mt-5 space-x-2 ">
        <div className="bg-gray-100 w-40 h-8 rounded-xl flex items-center"></div>
        <div className="bg-gray-100 w-40 h-8 rounded-xl flex items-center "></div>
        <div className="bg-gray-100 w-40 h-8 rounded-xl flex items-center"></div>
      </div>
      <div className="mt-8">
        <TableSkeleton />
      </div>
    </div>
  );
}

export default DetailSkeleton;
