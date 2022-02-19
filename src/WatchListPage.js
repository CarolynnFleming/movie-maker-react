import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getMovieSearchList } from './services/fetch-utils';

export default function WatchListPage() {
  const [movies, setmovies] = useState([]);
  async function refreshSawList() {
    const mySawList = await getMovieSearchList();

    setmovies(mySawList);
  }

  useEffect(() => {
    refreshSawList();
  }, []);
  return (
    <div>
      <h2>My Watchlist</h2>
      <MovieList movies={movies} refreshSawList={refreshSawList} />
    </div>
  );
}
