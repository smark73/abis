import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer/Footer.js';


const Home = (props) => {

  return (

    <div className="home">

      <div className="home__hdr-wrap">
        <div className="home__hdr">
          <span className="home__hdr-hdr">Contact</span>
        </div>
        <div className="home__hdr-txt">
          <p>asdfadfasdfadsf</p>
        </div>
      </div>

      <Footer />

    </div>


  );
}

export default Home;
