import React from 'react';
import { sawMovie } from './services/fetch_utils';


export default function WatchListItem({ movie, refreshSawList }) {
  async function handleClick() {
    await sawMovie(movie.id);

    await refreshSawList();
  }
  return (
    <div
      onClick={handleClick} className='movie-item watchlist-item'>
      <h1>{movie.watched ? '✅' : '👀'}</h1>
      <h3>{movie.title}</h3>
      <em>{movie.description}</em>
      <p>
        <img src={movie.poster ? `https://image.tmdb.org/t/p/original${movie.poster}` : 'https://www.placebear.com/200/300'} />
      </p>
    </div>
  );
}
