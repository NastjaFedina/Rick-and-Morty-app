import { FC } from 'react';

const LoadingSpinner: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] py-12">
      <div className="relative w-16 h-16">
        {/* Circle out */}
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-gray-700 border-t-green-500 animate-spin"></div>
        
        {/* Circle in */}
        <div className="absolute inset-2 rounded-full border-4 border-t-4 border-gray-800 border-t-purple-500 animate-spin-slow"></div>
      </div>

      <p className="mt-6 text-lg font-medium text-gray-300">
        Загружаем персонажей...
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Portal in Rick and Morty opens...
      </p>
    </div>
  );
};

export default LoadingSpinner;
