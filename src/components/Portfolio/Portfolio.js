import React, { useLayoutEffect }from 'react';
import './Portfolio.css';
import Examples from '../Examples/Examples.js';


const Portfolio = (props) => {

  useLayoutEffect(() => {
    setTargetArea();
    window.addEventListener('load', setTargetArea, false);
    window.addEventListener('scroll', setTargetArea, false);
    window.addEventListener('resize', setTargetArea, false);

    return () => {
      window.removeEventListener('load', setTargetArea, false);
      window.removeEventListener('scroll', setTargetArea, false);
      window.removeEventListener('resize', setTargetArea, false);
    };
  });

  function setTargetArea() {

    // determine active window section 
    var viewportHeight = window.innerHeight;
    var viewportCenter = viewportHeight/2;

    // (our target area will be 100px height)
    var targetHeight = 100;
    var targetAreaTop = viewportCenter - (targetHeight/2);
    var targetAreaBtm = targetAreaTop + targetHeight;

    //scroll amount
    var yOffset = window.pageYOffset;

    // set the targetHighlight position
    var targetHighlight = document.querySelector('.scroll-target__highlight');
    targetHighlight.style.top = targetAreaTop+'px';
    targetHighlight.style.height = targetHeight+'px';

    // select our elements
    var targetEl = document.querySelectorAll('.ex__wrap');
    var spacerEl = document.querySelectorAll('.ex__spacer');

    // EXAMPLES add/remove the active class
    for(let i=0; i < targetEl.length; i++) {
      let activeEl = targetEl[i];

      if (isInTargetArea(activeEl,targetAreaTop, targetAreaBtm, yOffset)) {
        activeEl.classList.add('active');
        // animate the active ex skill
        let exSkills = activeEl.querySelectorAll('.ex__skills');
        for(let i=0; i < exSkills.length; i++) {
          setTimeout(function() {
            let exSkill = exSkills[i];
            // delay is individually set by adding 200ms for each one
            exSkill.classList.add('show');
          }, 100 * parseInt(i));
        }

      } else {
        if (activeEl.classList.contains('active')){
          activeEl.classList.remove('active');
          activeEl.classList.add('inactive');
          setTimeout(function() {
            activeEl.classList.remove('inactive');
          }, 500);
        }
      }
    }

    // SPACER/SEPARATORS add/remove the show class
    for(let i=0; i < spacerEl.length; i++) {
      var activeEl = spacerEl[i];
      var sepEl = activeEl.querySelector('.ex__sep');

      if (isInTargetArea(activeEl, targetAreaTop, targetAreaBtm, yOffset)) {

        sepEl.classList.add('show');

      } else {

        if (sepEl.classList.contains('show')){
            sepEl.classList.remove('show');
        }
      }
    }

  }

  function isInTargetArea(activeEl, targetAreaTop, targetAreaBtm, yOffset) {
    // get element positions
    var elTop = activeEl.getBoundingClientRect().top;
    var elBtm = elTop + activeEl.offsetHeight;
    return elBtm >= targetAreaTop && elTop <= targetAreaBtm;
  };


  return (

    <div className="portfolio scroll-target">

      <div className="portfolio__hdr-wrap">
        <div className="portfolio__hdr">
          <span className="portfolio__hdr-hdr">Web Portfolio</span>
        </div>
        <div className="portfolio__hdr-txt">
          <p>Recent examples of my web development and design work.</p>
        </div>
      </div>

      <div className="scroll-target__sect">

        <div className="scroll-target__highlight"></div>

        <div className="examples__wrap">
          <Examples />
        </div>

      </div>


    </div>
  );
}

export default Portfolio;
