import React from 'react';
// import { Link } from 'react-router-dom';
import './Contact.css';
import Footer from '../Footer/Footer.js';


const Contact = (props) => {

  return (

    <div className="contact">

      <div className="contact__hdr-wrap">
        <div className="contact__hdr">
          <span className="contact__hdr-hdr">Contact</span>
        </div>
        <div className="contact__hdr-txt">
          <p>Email: <a className="contact__email" href="mailto:stacy@stacymark.com">stacy@stacymark.com</a></p>
        </div>
      </div>

      <Footer />

    </div>


  );
}

export default Contact;
