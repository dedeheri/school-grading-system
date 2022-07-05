function CardSkeleton() {
  return (
    <div className="flex flex-row space-x-2 animate-pulse">
      <div className="bg-gray-100 rounded-xl h-48 px-5 py-3 w-1/2"></div>
      <div className="bg-gray-100 rounded-xl h-48 px-5 py-3 w-1/2"></div>
      <div className="bg-gray-100 rounded-xl h-48 px-5 py-3 w-1/2"></div>
      <div className="bg-gray-100 rounded-xl h-48 px-5 py-3 w-1/2"></div>
      <div className="bg-gray-100 rounded-xl h-48 px-5 py-3 w-1/2"></div>
    </div>
  );
}

export default CardSkeleton;
