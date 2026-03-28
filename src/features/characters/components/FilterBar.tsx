import { FC, ChangeEvent } from 'react';

interface FilterBarProps {
  name: string;
  status: string;
  gender: string;
  onNameChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onGenderChange: (value: string) => void;
}

const FilterBar: FC<FilterBarProps> = ({
  name,
  status,
  gender,
  onNameChange,
  onStatusChange,
  onGenderChange,
}) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-gray-700 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Name search */}
        <div className="flex flex-col">
          <label 
            htmlFor="search" 
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Name search
          </label>
          <input
            id="search"
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onNameChange(e.target.value)}
            placeholder="Example: Rick, Morty, Summer..."
            className="
              w-full
              px-4 py-3
              bg-gray-900
              border border-gray-600
              rounded-xl
              text-white
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              focus:border-transparent
              transition-all
            "
          />
        </div>

        {/* Status filtrs */}
        <div className="flex flex-col">
          <label 
            htmlFor="status" 
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onStatusChange(e.target.value)}
            className="
              w-full
              px-4 py-3
              bg-gray-900
              border border-gray-600
              rounded-xl
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              focus:border-transparent
              transition-all
            "
          >
            <option value="">All status</option>
            <option value="alive">Alive (Alive)</option>
            <option value="dead">Dead (Dead)</option>
            <option value="unknown">Unknown (Unknown)</option>
          </select>
        </div>

        {/* Gender filtrs */}
        <div className="flex flex-col">
          <label 
            htmlFor="gender" 
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Пол
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onGenderChange(e.target.value)}
            className="
              w-full
              px-4 py-3
              bg-gray-900
              border border-gray-600
              rounded-xl
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              focus:border-transparent
              transition-all
            "
          >
            <option value="">Any gender</option>
            <option value="male">Male (Male)</option>
            <option value="female">Female (Female)</option>
            <option value="genderless">Genderless (Genderless)</option>
            <option value="unknown">Unknown (Unknown)</option>
          </select>
        </div>
      </div>

      {/* Small text  */}
      <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
        Filtrs are automatic
      </p>
    </div>
  );
};

export default FilterBar;
