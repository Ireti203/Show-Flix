import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Style.css";

const Home = () => {
  const { setSearch, movies, search, fetchMovies } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Input handleSearch={handleSearch} fetchMovies={fetchMovies} search={search} />
      
      {movies?.length > 0 ? (
        <div className="row">
          {movies?.map((movie) => {
            return (
              <Link 
                to={`movies/${movie.imdbID}`} 
                className="text-link"
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          {/* <p>Search a movie!</p>
          <p>i.e. Harry Potter</p> */}
        </div>
      )}
    </div>
  );
};

export default Home;
