import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
 
  const statusColor =
    character.status === 'Alive' ? 'bg-green-500' :
    character.status === 'Dead'  ? 'bg-red-500' :
    'bg-gray-500';

  return (
    <Link
      to={`/character/${character.id}`}
      className="
        block
        group
        bg-gray-800
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:shadow-purple-500/30
        transition-all
        duration-300
        transform
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
          loading="lazy" 
        />
        
        {/* Overlay */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          flex
          items-end
          p-4
        ">
          <h3 className="text-xl font-bold text-white truncate">
            {character.name}
          </h3>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 truncate">
          {character.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
          <span className="text-gray-300 font-medium">
            {character.status} — {character.species}
          </span>
        </div>

        {character.type && (
          <p className="text-sm text-gray-400">
            {character.type}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-1">
          Gender: {character.gender}
        </p>
      </div>
    </Link>
  );
};

export default CharacterCard;
