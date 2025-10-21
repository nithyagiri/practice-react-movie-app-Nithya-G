import { useState } from 'react'
import './App.css'
// import Spinner from './components/Spinner';
// import Loading from './components/Loading';
import movieData from './components/MovieSelector';
import Button from './components/Button';
import ErrorPage                                     from './components/ErrorPage';
import Dropdown from './components/Dropdown';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [error, setError] = useState(null);
    const [movie, setMovies] = useState(null);
    const movieData = [
    {genre: 'action', movieName: 'Die Hard'},
    {genre: 'action', movieName: 'Mad Max'},
    {genre: 'action', movieName: 'John Wick'},
    {genre: 'comedy', movieName: 'Step Brothers'},
    {genre: 'comedy', movieName: 'The Mask'},
    {genre: 'comedy', movieName: 'Superbad'},
    {genre: 'drama', movieName: 'The Godfather'},
    {genre: 'drama', movieName: 'Forrest Gump'},
    {genre: 'drama', movieName: 'Fight Club'}
];

const handleDropdownSelect = (selectedOption) => {
  console.log('Selected: ', selectedOption);
};

  return (
  <div>
    <h2>Select Genre</h2>
    <Dropdown options={movieData.genre} onSelect={handleDropdownSelect} />
  </div>
  )
}

export default App
