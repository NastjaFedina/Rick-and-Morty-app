import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

interface Character {
  id: number
  name: string
  status: string
  species: string
  image: string
}

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="characters-container">
      <h1>Rick and Morty Characters</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <div className="character-card">
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>{character.species}</p>
              <p>Status: {character.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
