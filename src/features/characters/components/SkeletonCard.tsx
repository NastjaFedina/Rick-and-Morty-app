import { FC } from 'react';

const SkeletonCard: FC = () => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">
      {/* Image of skeleton */}
      <div className="w-full h-64 bg-gray-700"></div>

      {/* Card info */}
      <div className="p-5 space-y-4">
        {/* Название */}
        <div className="h-6 bg-gray-700 rounded-lg w-4/5"></div>

        {/* Status and display */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-700 rounded-lg w-3/5"></div>
        </div>

        {/* More info */}
        <div className="h-4 bg-gray-700 rounded-lg w-2/3"></div>
        
        {/* Gender */}
        <div className="h-4 bg-gray-700 rounded-lg w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
