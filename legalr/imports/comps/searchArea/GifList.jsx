import React, {Component} from 'react';
import GifItem from './GifItem';
import './GifStyles.css';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
