'use client'

export default function NewsListSkeleton() {
  return (
    <div className="space-y-8">
      {/* Grid container with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md animate-pulse flex flex-col"
          >
            {/* Image Skeleton */}
            <div className="relative w-full pt-[56.25%] bg-gray-300 rounded-t-lg">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-300"></div>
            </div>

            {/* Content Skeleton */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow space-y-3">
              {/* Title */}
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>

              {/* Description */}
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <div className="h-10 w-20 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-10 w-10 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="h-10 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}