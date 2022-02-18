import React from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import WatchListItem from './WatchListItem';

export default function MovieList({ movies, refreshSawList, isOnSawList }) {
  const location = useLocation();
  return (
    <div className='movie-list'>
      {movies.map((movie, i) => location.pathname.includes('search')
        ? <Movie 
          key={movie.title + i}
          movie={movie}
          isOnSawList={isOnSawList}
          refreshSawList={refreshSawList}/>
        : <WatchListItem
          key={movie.title + i}
          refreshSawList={refreshSawList}
          movie={movie}/>)
      }
    </div>
  );
}
