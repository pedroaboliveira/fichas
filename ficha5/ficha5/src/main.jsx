import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MinhaApp from './Components/App.jsx';
import MoviesList from './Components/Movies.jsx';

createRoot(document.getElementById('raiz')).render(
  <StrictMode>
    <MinhaApp />
  </StrictMode>,
)

createRoot(document.getElementById('raiz')).render(
  <MoviesList />
);

import MovieList from './Components/Movies2.jsx';

createRoot(document.getElementById('raiz')).render(
  <MovieList />
);