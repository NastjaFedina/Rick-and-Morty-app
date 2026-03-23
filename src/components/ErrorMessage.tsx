import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-6 text-center">
      <div className="w-20 h-20 mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-red-400 mb-3">Что-то пошло не так</h3>
      <p className="text-gray-300 text-lg mb-6 max-w-md">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="
            px-8 py-3 
            bg-red-600 hover:bg-red-700 
            text-white font-medium 
            rounded-xl 
            transition-colors 
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            shadow-lg shadow-red-900/30
          "
        >
          Try again
        </button>
      )}

      {!onRetry && (
        <p className="text-gray-500 text-sm mt-4">
          Try reload page or go back later
        </p>
      )}
    </div>
  );
};

export default ErrorMessage;
