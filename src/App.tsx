import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CharactersPage from './components/CharactersPage'
import CharacterDetail from './components/CharacterDetail'

function App() {
  return (
    <BrowserRouter basename="/Rick-and-Morty-app/">
      <Routes>
        <Route path="/" element={<h1>Characters Page (TODO)</h1>} />
        <Route path="/character/:id" element={<h1>Character Detail (TODO)</h1>} />
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
