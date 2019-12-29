import React from 'react';

import './Background.css';

const Background = () => {

  setInterval( function(){

    var bgOne = document.querySelector('.bgOne');
    var bgTwo = document.querySelector('.bgTwo');

    if(bgOne.classList.contains('pos--1')){
      bgOne.style.left = '20%';
      bgTwo.style.left = '-10%';
      bgOne.classList.remove('pos--1');
      bgOne.classList.add('pos--2');
      bgTwo.classList.remove('pos--2');
      bgTwo.classList.add('pos--1');

    } else {
      bgOne.style.left = '-10%';
      bgTwo.style.left = '20%';
      bgOne.classList.remove('pos--2');
      bgOne.classList.add('pos--1');
      bgTwo.classList.remove('pos--1');
      bgTwo.classList.add('pos--2');
    }
  }, 10000);

  return (

    <div className="bg-wrap">
      <div className="bgOne bg--grad--1 pos--1"></div>
      <div className="bgTwo bg--grad--2 pos--2"></div>
    </div>

  );
}

export default Background;
