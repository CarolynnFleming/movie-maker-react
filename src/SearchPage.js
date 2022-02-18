import React from 'react';
import MovieList from './MovieList';
import { searchMovie, getMovieSearchList } from './services/fetch_utils';
import { useState, useEffect } from 'react';

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [sawList, setSawList] = useState([]);

    async function handleSearch(e) {
        
    }
  return (
    <div>SearchPage</div>
  )
}
