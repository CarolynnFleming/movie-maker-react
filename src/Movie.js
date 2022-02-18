import React from 'react';
import { addToMovieSearchList } from './services/fetch_utils';

export default function Movie({
  movie,
  isOnSawList,
  refreshSawList,
}) {
  const haveWatched = isOnSawList(movie.id);

  async function handleClick() {
    if (!haveWatched) {
      const sawlistItem = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster: movie.poster_path,
      };
      await addToMovieSearchList(sawlistItem);
      await refreshSawList();
    }
  }
  return (
    <div
      title="movie-item"
      onClick={handleClick}
      className={`movie-item ${haveWatched ? 'watched' : ''}`}>
      <h1>{haveWatched && '💖'}</h1>
      <h3>{movie.title}</h3>
      <em>{movie.overview}</em>
      <p>
        <img src={movie.poster_path ? `https://image.tmb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/200/300'} />
      </p>
    </div>
  );
}
