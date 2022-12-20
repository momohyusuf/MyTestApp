import React from 'react';
import MovieSlider from './MovieSlider';

const MovieCategory = ({ movies }) => {
  // separating all the movies based on their category
  let separateMoviesByCategories = movies?.reduce((arr, value) => {
    (arr[value['Type']] = arr[value['Type']] || []).push(value);
    return arr;
  }, {});
  //   ********************

  return (
    <div>
      <MovieSlider
        category={separateMoviesByCategories?.movie}
        categoryHeader="Movie"
      />
      {/* series */}

      <MovieSlider
        category={separateMoviesByCategories?.series}
        categoryHeader="Series"
      />
      {/* episode */}

      <MovieSlider
        categoryHeader="Episodes"
        category={separateMoviesByCategories?.episode}
      />
    </div>
  );
};

export default MovieCategory;
