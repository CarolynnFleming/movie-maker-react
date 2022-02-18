import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getMovieSearchList } from './services/fetch_utils';

export default function WatchListPage() {
    const [movies, setmovies] = useState([]);
    async function refreshSawList() {
        const mySawList = await getMovieSearchList();

        setmovies(mySawList);
    }
  return (
    <div>WatchListPage</div>
  )
}
