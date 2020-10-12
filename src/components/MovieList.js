import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div>
      {
        movies.map((user, i) => {
          return (
            <Movie
              key={i}
              id={movies[i].id}
              name={movies[i].title}
              popularity={movies[i].popularity}
              image_name = {movies[i].poster_path}
              />
          );
        })
      }
    </div>
  );
}

export default MovieList;