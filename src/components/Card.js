import React from 'react';
import '../styles/Layout.css';

const Card = ({ image }) => {
  return (
    <div className='image-list'>
        <img src={image} className='movies' alt = 'movie'/>
    </div>
  );
};

export default Card;