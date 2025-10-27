import React, { useState } from 'react';
import Spinner from './Spinner';


function MovieSelector(){
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
const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const genreOptions = [...new Set(movieData.map(item => item.genre))];
 const handleDropdownChange = (e) => {
    setSelectedGenre(e.target.value);
    setError('');
  };

  const fetchMovies = () => {
    if (!selectedGenre) {
      setError('Please select a genre first!');
      return;
    }
    setIsLoading(true);
    setError('');
     setTimeout(() => {
      const filtered = movieData.filter(movie => movie.genre === selectedGenre);
      setMovies(filtered);
      setIsLoading(false);
    }, 1500);
  };
   return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Select a Movie Genre</h2>

      <select onChange={handleDropdownChange} value={selectedGenre}>
        <option value="">-- Select Genre --</option>
        {genreOptions.map((genre, index) => (
          <option key={index} value={genre}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={fetchMovies}>Fetch Movies</button>

      {isLoading && <Spinner />}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {movies.length > 0 && !isLoading && (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.movieName}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSelector;
