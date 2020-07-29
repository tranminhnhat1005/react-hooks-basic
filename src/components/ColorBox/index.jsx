import React, {useState} from 'react';
import './ColorBox.scss';
ColorBox.propTypes = {};

function getRamdomColor () {
  const COLOR_LIST = ['green', 'red', 'white', 'blue', 'deeppink'];
  const randomIndex = Math.trunc (Math.random () * 4);
  return COLOR_LIST[randomIndex];
}

function ColorBox () {
  const [color, setColor] = useState (() => {
    const initColor = localStorage.getItem ('box-color') || 'deeppink';
    return initColor;
  });
  function handleBoxClick () {
    const newColor = getRamdomColor ();
    setColor (newColor);
    localStorage.setItem ('box-color', newColor);
  }
  return (
    <div
      className="color-box"
      style={{background: color}}
      onClick={handleBoxClick}
    />
  );
}

export default ColorBox;
