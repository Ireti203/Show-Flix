import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Play from "../utils/Play.png";
import Star from "../utils/Star.png";
import Heart from "../utils/Heart.svg";
import Ellipse from "../utils/Ellipse.png";

import { MovieContext } from "../context/MovieContext";

import noImage from "../utils/no-image-available.png";
import "../styles/Style.css";

const Detail = () => {
  let { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id);
  }, []);

  return (
    <div className="movie-details">
      <div className="">
        {selectedMovie.Poster === "N/A" ? (
          <img src={noImage} className='movie-poster' alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} className='movie-poster' alt={selectedMovie.Title} />
        )}
      </div>
      <div className="info">
        <div className="movie-title">
          {selectedMovie.Title}
        </div>
        <div className="about-movie">
          {selectedMovie.Plot}
        </div>
        <div className='movie-result'>
          <div className='label-1'>
            <img src={Ellipse} alt=''></img><span>{selectedMovie.Released}</span>
          </div>
          <div className='label-2'>
            <img src={Star} alt=''></img><span>{selectedMovie.imdbRating}</span>
          </div>
          <div className='label-3'>
            <img src={Play} alt=''></img><span>{selectedMovie.Runtime}</span>
          </div>
        </div>
        <div className='watch-button'>
          <div
            className='submit-button'
          >Watch Now
          </div>
          <div className='heart-icon'>
            <img src={Heart} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
