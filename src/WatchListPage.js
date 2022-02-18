import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getMovieSearchList } from './services/fetch_utils';

export default function WatchListPage() {
    const [movies, setmovies] = useState([]);
  return (
    <div>WatchListPage</div>
  )
}
