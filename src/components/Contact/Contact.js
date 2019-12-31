import React from 'react';
import './Contact.css';

const Contact = (props) => {

  return (

    <div className="contact">

      <div className="contact__hdr-wrap">

        <div className="contact__hdr">
          <span className="contact__hdr-hdr">ABIS Solutions</span>
        </div>

        <div className="contact__details">
          <section className="contact__details--sect">
            <strong>Corporate Office</strong><br/>
            10220 S. Dolfield Road, 209C<br/>
            Owings Mills, MD 21117
          </section>

          <section md="4" className="contact__details--sect">
            <strong>New York Office</strong><br/>
            5 Penn Plaza, 23rd Floor<br/>
            New York, NY 10001
          </section>
          
          <section md="4" className="contact__details--sect">
            <strong>Call:</strong> 888.421.ABIS (2247)<br/>
            <strong>Email:</strong> info@abis.com
          </section>
        </div>

      </div>

    </div>


  );
}

export default Contact;
