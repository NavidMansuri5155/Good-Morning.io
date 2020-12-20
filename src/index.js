import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let currDate = new Date();
currDate = currDate.getHours();
let grrting = '';
const css = {};


if (currDate >= 1 && currDate < 12) {
  grrting = "GOOD MORNING";
  css.color = "red"
} else if (currDate >= 12 && currDate < 18) {
  grrting = "GOOD AFTERNOON";
  css.color = "orange"
} else {
  grrting = "GOOD NIGHT"
  css.color = "black"
}

ReactDOM.render(
  <>
    <div>
      <h1>HELLO REACT , <span style={css}>{grrting}</span> </h1>,
    </div>
  </>,
  document.getElementById('root')
);


