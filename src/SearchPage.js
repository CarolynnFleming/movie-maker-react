import React from 'react';
import MovieList from './MovieList';
import { searchMovies, getMovieSearchList } from './services/fetch-utils';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [sawList, setSawList] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
     
    const toms = await searchMovies(searchQuery);

    setResults(toms);
  }

  async function refreshSawList() {
    const mySawList = await getMovieSearchList();

    setSawList(mySawList);
  }

  useEffect(() => {
    refreshSawList();
  }, []);

  function isOnSawList(api_id) {
    const match = sawList.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <section>
            Results:
        <MovieList toms={results} isOnSawList={isOnSawList} refreshSawList={refreshSawList}/>
      </section>
    </div>
  );
}
