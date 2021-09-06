import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const API_KEY = '44a627e9'; // OMDb API Key

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState('');
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');


  const fetchMovies = async (searchValue) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
    );
    const data = response.data;
    setMovies(data.Search);
  };

  const showDetail = async (id) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const data = response.data;
    setSelectedMovie(data);
  };

  useEffect(() => {
    console.log(API_KEY)
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        search,
        fetchMovies,
        movies,
        showDetail,
        selectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
