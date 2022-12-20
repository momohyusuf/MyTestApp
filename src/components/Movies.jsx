import React, { useState, useEffect } from 'react';
import MovieCategory from './MovieCategory';
import axios from 'axios';

const Movies = ({ searchValue }) => {
  const [movies, setIsMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   function for fetching movies
  const getAllMovies = async () => {
    setIsLoading(true);
    const {
      data: { Search },
    } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_APIKEY}&s=${
        searchValue || 'superman'
      }`
    );
    setIsLoading(false);
    setIsMovies(Search);
  };
  //   ***************

  useEffect(() => {
    getAllMovies();
  }, [searchValue]);

  if (isLoading) return <h2>Loading movies...</h2>;

  if (!movies) {
    return <p>Sorry No movie Found for: {searchValue}</p>;
  }

  return (
    <section>
      <MovieCategory movies={movies} />
    </section>
  );
};

export default Movies;
