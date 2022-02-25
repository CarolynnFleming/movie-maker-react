import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getMovieSearchList } from './services/fetch-utils';

export default function WatchListPage() {
  const [toms, setmovies] = useState([]);
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
      <MovieList toms={toms} refreshSawList={refreshSawList} />
    </div>
  );
}
