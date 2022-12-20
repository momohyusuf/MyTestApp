import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleMovieCard = ({ Title }) => {
  return (
    <div className="movie--card">
      <p>{Title}</p>
    </div>
  );
};

export default SingleMovieCard;
