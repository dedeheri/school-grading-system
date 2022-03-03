import React from "react";

function SkeletonClassFilter() {
  return (
    <div className="p-3 animate-pulse space-y-2">
      <div className="bg-gray-100 h-4 w-full rounded-xl"></div>
      <div className="bg-gray-100 h-4 w-full rounded-xl"></div>
      <div className="bg-gray-100 h-4 w-full rounded-xl"></div>
    </div>
  );
}

export default SkeletonClassFilter;
