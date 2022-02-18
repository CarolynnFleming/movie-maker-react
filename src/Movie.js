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
    <div>Movie</div>
  );
}
