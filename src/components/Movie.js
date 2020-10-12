import React from 'react';

const Movie = ({ name, popularity, id, image_name}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='movies' src={`https://image.tmdb.org/t/p/w185${image_name?image_name:'/7IXMqZnwccogptThay3togKIFWw.jpg'}?200x200`} />
      <div>
        <h2>{name.substr(0, 15)}</h2>
        <p>Popularity: {popularity}</p>
      </div>
    </div>
  );
}

export default Movie;