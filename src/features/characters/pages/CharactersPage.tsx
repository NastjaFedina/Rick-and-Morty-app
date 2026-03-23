import { useState, useEffect } from 'react';
import { getCharacters } from '../api';
import { Character } from '../types';
import CharacterCard from '../components/CharacterCard';
import FilterBar from '../components/FilterBar';
import SkeletonCard from '../components/SkeletonCard';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ErrorMessage from '../../../components/ErrorMessage';

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  
  const loadCharacters = async (reset = false) => {
    if (loading) return;
    setLoading(true);
    setError(null);

    const currentPage = reset ? 1 : page;

    try {
      const data = await getCharacters(currentPage, { name, status, gender });

      setCharacters((prev) =>
        reset ? data.results : [...prev, ...data.results]
      );

      setHasMore(!!data.info.next);
      if (!reset) setPage((p) => p + 1);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить персонажей. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    setPage(1);
    setCharacters([]);
    loadCharacters(true);
  }, [name, status, gender]);

  
  const handleLoadMore = () => {
    loadCharacters();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight text-purple-400">
          Персонажи Rick and Morty
        </h1>

        {/* Filtrs */}
        <FilterBar
          name={name}
          status={status}
          gender={gender}
          onNameChange={setName}
          onStatusChange={setStatus}
          onGenderChange={setGender}
        />

        {/* Error */}
        {error && <ErrorMessage message={error} onRetry={() => loadCharacters(true)} />}

        {/* Characters catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Skeletons for the first loading */}
          {loading && characters.length === 0 ? (
            Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))
          )}
        </div>

        {/* Nothing found */}
        {!loading && characters.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-400">Ничего не найдено по выбранным фильтрам 😢</p>
            <p className="mt-2 text-gray-500">Попробуйте изменить поиск или сбросить фильтры</p>
          </div>
        )}

        {/* Button "Load more" */}
        {hasMore && !loading && characters.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="
                px-10 py-4
                bg-purple-600 hover:bg-purple-700
                text-white font-medium text-lg
                rounded-2xl
                transition-all
                shadow-lg shadow-purple-900/30
                focus:outline-none focus:ring-2 focus:ring-purple-500
              "
            >
              Download more characters
            </button>
          </div>
        )}

        {loading && characters.length > 0 && (
          <div className="mt-12 flex justify-center">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
}
