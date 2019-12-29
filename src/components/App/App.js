import React, { useEffect, useLayoutEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
// import Background from '../Background/Background';
import Home from '../Home/Home';
import Chart from '../Chart/Chart';
import AbisTest from '../Chart/AbisTest';

// import Footer from '../Footer/Footer.js';
// import Resume from '../Resume/Resume.js';
// import Portfolio from '../Portfolio/Portfolio.js';
// import DesignPortfolio from '../Design/Design.js';
// import Contact from '../Contact/Contact.js';
// import About from '../About/About.js';

import * as ROUTES from '../../constants/routes';


const App = (props) => {

  // const [value, setValue] = useState('');
  // const onChange = event => setValue(event.target.value);

  const resetPageScroll = () => {
    window.scrollTo(0,0);
    hdrSize();
  }

  useEffect(() => {
    let app = document.querySelector('.app');
    // setTimeout(function() {
    //   app.classList.add('init');
    // }, 2000);
  });

  useLayoutEffect(() => {
    // hdrSize();
    // window.addEventListener('load', hdrSize, false);
    // window.addEventListener('scroll', hdrSize, false);
    // window.addEventListener('resize', hdrSize, false);

    return () => {
      // window.removeEventListener('load', hdrSize, false);
      // window.removeEventListener('scroll', hdrSize, false);
      // window.removeEventListener('resize', hdrSize, false);
    };
  });


  // PAGE HEADER 

  function hdrSize() {

    //scroll amount
    var yOffset = window.pageYOffset;
    var appHdr = document.querySelector('.app-hdr');
    var appHdrGrid = document.querySelector('.app-hdr__grid');
    var logoSvg = document.querySelector('.app-hdr__logo');

    // get window width to add mobile-only class
    // const winWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // if (winWidth < 768) {
    //   appHdrGrid.classList.add('mobile');
    //   logoSvg.classList.add('mobile');
    // } else {
    //   appHdrGrid.classList.remove('mobile');
    //   logoSvg.classList.remove('mobile');
    // }


    // if (yOffset > 150) {
    //   // on first load, no classes exist, don't want to animate until ready
    //   appHdr.classList.add('app-hdr--move-up');
    //   if(appHdr.classList.contains('app-hdr--move-down')){
    //     appHdr.classList.remove('app-hdr--move-down');
    //   }
    //   if(logoSvg.classList.contains('app-hdr__logo--init')){
    //     logoSvg.classList.remove('app-hdr__logo--init');
    //     logoSvg.classList.add('app-hdr__logo--small');
    //   } else {
    //     logoSvg.classList.remove('app-hdr__logo--big');
    //     logoSvg.classList.add('app-hdr__logo--small');
    //   }


    // } else if (yOffset <= 150) {
    //   // on first load, no classes exist, don't want to animate until ready
    //   if(appHdr.classList.contains('app-hdr--move-up')){
    //     appHdr.classList.remove('app-hdr--move-up');
    //     appHdr.classList.add('app-hdr--move-down');
    //   }
    //   if(!logoSvg.classList.contains('app-hdr__logo--init')){
    //     logoSvg.classList.remove('app-hdr__logo--small');
    //     logoSvg.classList.add('app-hdr__logo--big');
    //   }

    // }

  }

  

  return (

    <div className="app">

      <header className="app-hdr">

        <div className="app-hdr__grid">

          <div className="app-hdr__grid-item">
            <div className="app-hdr__logo"></div>
          </div>

          <div className="app-hdr__grid-item">
            <Link to={ROUTES.HOME} className="app-hdr__name">ABIS Test</Link>
          </div>

          <div className="app-hdr__grid-item">
            <nav className="app-hdr__nav">
              <Link className="app-hdr__links" to={ROUTES.HOME} onClick={resetPageScroll} >Home</Link>
              <Link className="app-hdr__links" to={ROUTES.CHART} onClick={resetPageScroll} >Chart</Link>
            </nav>
          </div>

        </div>

      </header>

      <div className="app-body">

        <Switch>
          <Route
            exact path={ROUTES.HOME}
            render={(props) => (
              <Home
                // onChange={onChange}
                resetPageScroll={resetPageScroll}
                {...props}
              />
            )}
          />

          <Route
            path={ROUTES.CHART}
            render={(props) => (
              <Chart
                // onChange={onChange}
                resetPageScroll={resetPageScroll}
                {...props}
              />
            )}
          />

          <Route
            path={ROUTES.CHART}
            render={(props) => (
              <AbisTest
                {...props}
              />
            )}
          />



        </Switch>
      </div>

    </div>

  );

}

export default App;
