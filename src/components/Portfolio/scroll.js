
/*Embedded in ScrollTarget.js instead*/

window.onload = () => {
  window.addEventListener('load', setTargetArea, false);
  window.addEventListener('scroll', setTargetArea, false);
  window.addEventListener('resize', setTargetArea, false);
}

function setTargetArea() {
	// determine active window section 
  // (our target area will be 100px height)
	// var viewportHeight = $(window).innerHeight();
  var viewportHeight = window.innerHeight;
  var viewportCenter = viewportHeight/2;
  var viewportActiveTop = viewportCenter - 50;
  //actual height is set in css - the btm here is just for calc
  var viewportActiveBtm = viewportActiveTop + 100;
  var yOffset = window.pageYOffset;
  // set the targetHighlight position
  var targetHighlight = document.querySelector('#targetHighlight');
  targetHighlight.style.top = viewportActiveTop+'px';

  var examples = document.querySelectorAll('.example');

  for(let i=0; i < examples.length; i++) {
    let ex = examples[i];
    if (isInVP(ex,viewportActiveTop, viewportActiveBtm, yOffset)) {
      ex.classList.add('active');
    } else {
      ex.classList.remove('active');
    }
  // });
  }
}


function isInVP(ex, viewportActiveTop, viewportActiveBtm, yOffset) {
  // get element positions
  var elTop = ex.getBoundingClientRect().top;
  var elBtm = elTop + ex.offsetHeight;
  var elOuterH = ex.offsetHeight;
  var elInnerH = ex.clientHeight;

  var showPositions = '<p>Top (from window): ' + elTop + '<br/>Btm: ' + elBtm + 
  '<br/>Outer Height: ' + elOuterH + 
  '<br/>Inner Height: ' + elInnerH +
  '<br/>pageYOffset: ' + yOffset + '</p>';

  ex.innerHTML = showPositions;

  return elBtm >= viewportActiveTop && elTop <= viewportActiveBtm;

};
