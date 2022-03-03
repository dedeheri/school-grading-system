import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function Pagination({ page }) {
  const navigate = useNavigate();

  const pagination = (page, limit) => {
    navigate({
      search: `${createSearchParams({
        page,
        limit,
      })}`,
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-700 flex space-x-1">
        <p>Menampilkan</p>
        <p>
          {page?.from} - {page?.to}
        </p>
        <p>dari {page?.total} Hasil</p>
      </div>

      <div
        className="relative z-0 inline-flex rounded-md space-x-2"
        aria-label="Pagination"
      >
        {page?.previous && (
          <div
            onClick={() =>
              pagination(page?.previous?.page, page?.previous?.limit)
            }
            className="relative inline-flex items-center p-2 cursor-pointer  text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-black rounded-full"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}

        {page?.next && (
          <div
            onClick={() => pagination(page?.next?.page, page?.next?.limit)}
            className="relative inline-flex items-center p-2 cursor-pointer  text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-black rounded-full"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Pagination;
