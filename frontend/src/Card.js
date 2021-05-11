import React, {useState} from 'react'
import './App.css';
import { Input } from "@material-ui/core";


function Card({song, image_url, reward, setOpen}) {

  


  const handleChangePos = () => {
    reward(1);
    setOpen(false);
  };

  const handleChangeNeg = () => {
    reward(0);
    setOpen(false);
  };


  return (

            <div>
                <div className="container">
                  <img src={image_url} alt="Avatar" className="image"/>
                  <div className="overlay">
                  <div className="text">{song}</div>
                  </div>
                </div>
                <button class="big-button" onClick={handleChangePos}>I like it</button>
                <button class="big-button" onClick={handleChangeNeg}>I don't like it</button>
            </div>


  );
}

export default Card;