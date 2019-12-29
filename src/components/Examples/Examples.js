import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Examples.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  '/img/ex-pokerface-table.jpg',
  '/img/ex-pokerface-players.jpg',
  '/img/ex-gcmaz.jpg',
  '/img/ex-kaffnews.jpg',
  '/img/ex-icw-1.jpg',
  '/img/ex-icw-2.jpg',
  '/img/ex-skm-1.jpg',
  '/img/ex-skm-2.jpg',
];


class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: props.photoClicked ? props.photoClicked : 0,
      isOpen: false,
    };
  }


  render() {

    const { photoIndex, isOpen } = this.state;

    return (

      <div className="examples">

        <article className="ex__wrap">

          <div className="ex__row1">
            <div className="ex__row1-left">
              <div className="ex__hdr">
                <span>PokerFace</span>
              </div>
              <div className="ex__hdr-txt">
                <p>I built PokerFace as a just-for-fun project using React.  It's a simple app to input poker games and players.  You can arrange the players with a drag-n-drop interface, and take notes while your playing.</p>
                <p>Built with React, NoSQL, Drag-n-Drop interface.</p>

                <div className="ex__link-block">
                  <a className="ex__link" href="http://poker-players.firebaseapp.com">PokerFace website &raquo;</a>
                  <div className="ex__link-notes">
                    <span className="ex__link-u"><strong>login email: </strong> example@stacymark.com</span>
                    <span className="ex__link-p"><strong>login password: </strong> example</span>
                  </div>
                  <a className="ex__link" href="https://github.com/smark73/pokerface">Github Repo &raquo;</a>
                </div>

              </div>
            </div>
            <div className="ex__row1-right">
              <ul className="ex__skills-ul">
                <li className="ex__skills-li"><span className="ex__skills">React</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Vanilla JS</span></li>
                <li className="ex__skills-li"><span className="ex__skills">HTML5</span></li>
                <li className="ex__skills-li"><span className="ex__skills">CSS3</span></li>
                <li className="ex__skills-li"><span className="ex__skills">NoSQL</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Git</span></li>
              </ul>
            </div>
          </div>

          <div className="ex__row2">
            <section className="ex__img-grid ex__img-grid--2col ex__">
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
                  <img src="/img/ex-pokerface-table-sm.jpg" width="auto" height="auto" alt="Example - PokerFace App" />
                </Link>
              </div>
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
                  <img src="/img/ex-pokerface-players-sm.jpg" width="auto" height="auto" alt="Example - PokerFace App" />
                </Link>
              </div>
            </section>
          </div>

        </article>


        <div className="ex__spacer">
          <div className="ex__sep-bg">
            <div className="ex__sep"></div>
          </div>
        </div>


        <article className="ex__wrap">

          <div className="ex__row1">
            <div className="ex__row1-left">
              <div className="ex__hdr">
                <span>Great Circle Media / KAFF News</span>
              </div>
              <div className="ex__hdr-txt">
                <p>Great Circle Media needed an easy to use CMS for their KAFF News team to post stories and interact with the audience, as well as a centralized CMS for all the radio stations in the media group. This custom WordPress theme allows the individual websites to show/hide specific content based on their audience preferences.</p>
                <p>I helped the company grow web traffic 10x in my time as their web developer.</p>
                <p>Built with custom WordPress themes and plugins.</p>
                <div className="ex__link-block">
                  <a className="ex__link" href="https://gcmaz.com">Great Circle Media website &raquo;</a>
                  <br/>
                  <a className="ex__link" href="https://kaffnews.com">KAFF News website &raquo;</a>
                  <br/>
                  <a className="ex__link" href="https://github.com/smark73/gcmaz">Github Repo (News) &raquo;</a>
                  <br/>
                  <a className="ex__link" href="https://github.com/smark73/kmgn">Github Repo (Radio Site) &raquo;</a>
                </div>

              </div>
            </div>
            <div className="ex__row1-right">
              <ul className="ex__skills-ul">
                <li className="ex__skills-li"><span className="ex__skills">PHP</span></li>
                <li className="ex__skills-li"><span className="ex__skills">HTML5</span></li>
                <li className="ex__skills-li"><span className="ex__skills">CSS3/SCSS</span></li>
                <li className="ex__skills-li"><span className="ex__skills">JavaScript/Jquery</span></li>
                <li className="ex__skills-li"><span className="ex__skills">MySQL</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Git</span></li>
                <li className="ex__skills-li"><span className="ex__skills">WordPress</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Photoshop</span></li>
                <li className="ex__skills-li"><span className="ex__skills">SEO</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Google Analytics</span></li>
              </ul>
            </div>
          </div>

          <div className="ex__row2">
            <section className="ex__img-grid ex__img-grid--2col">
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>
                  <img src="/img/ex-gcmaz-sm.jpg" width="auto" height="auto" alt="Example - Great Circle Media" />
                </Link>
              </div>
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
                  <img src="/img/ex-kaffnews-sm.jpg" width="auto" height="auto" alt="Example - KAFF News" />
                </Link>
              </div>
            </section>
          </div>

        </article>


        <div className="ex__spacer">
          <div className="ex__sep-bg">
            <div className="ex__sep"></div>
          </div>
        </div>

        
        <article className="ex__wrap">

          <div className="ex__row1">
            <div className="ex__row1-left">
              <div className="ex__hdr">
                <span>It Can Wait (Northern Arizona)</span>
              </div>
              <div className="ex__hdr-txt">
                <p>Northern Arizona's "It Can Wait" Campaign to stop texting while triving. Display's pledges in a responsive grid for viewability on all screens. The UI encourages users to view and share pledges.</p>
                <p>Built with JavaScript and AJAX in a custom WordPress theme.</p>
                <div className="ex__link-block">
                  <a className="ex__link" href="https://itcanwaitnaz.com">It Can Wait NAZ website &raquo;</a>
                  <br/>
                  <a className="ex__link" href="https://github.com/smark73/itcanwaitnaz">Github Repo &raquo;</a>
                </div>

              </div>
            </div>
            <div className="ex__row1-right">
              <ul className="ex__skills-ul">
                <li className="ex__skills-li"><span className="ex__skills">JavaScript/Jquery</span></li>
                <li className="ex__skills-li"><span className="ex__skills">AJAX</span></li>
                <li className="ex__skills-li"><span className="ex__skills">PHP</span></li>
                <li className="ex__skills-li"><span className="ex__skills">HTML5</span></li>
                <li className="ex__skills-li"><span className="ex__skills">CSS3/SCSS</span></li>
                <li className="ex__skills-li"><span className="ex__skills">MySQL</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Git</span></li>
                <li className="ex__skills-li"><span className="ex__skills">WordPress</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Photoshop</span></li>
                <li className="ex__skills-li"><span className="ex__skills">SEO</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Google Analytics</span></li>
              </ul>
            </div>
          </div>

          <div className="ex__row2">
            <section className="ex__img-grid ex__img-grid--2col">
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}>
                  <img src="/img/ex-icw-1-sm.jpg" width="auto" height="auto" alt="Example - It Can Wait Northern AZ" />
                </Link>
              </div>
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}>
                  <img src="/img/ex-icw-2-sm.jpg" width="auto" height="auto" alt="Example - It Can Wait Northern AZ" />
                </Link>
              </div>
            </section>
          </div>

        </article>


        <div className="ex__spacer">
          <div className="ex__sep-bg">
            <div className="ex__sep"></div>
          </div>
        </div>


      <article className="ex__wrap">

          <div className="ex__row1">
            <div className="ex__row1-left">
              <div className="ex__hdr">
                <span>Stacy Mark - Paintings</span>
              </div>
              <div className="ex__hdr-txt">
                <p>This is an online gallery of my artwork. I wanted a touch-friendly interface and make use of JavaScript for the enhanced UI on mobile devices. It makes use of a responsive grid and touch swipe capabilities for effectiveness on all screens.</p>
                <p>Built with a mobile-first JS user interface using PhotoSwipe JS, Isotope JS, and a custom WordPress theme.</p>
                <div className="ex__link-block">
                  <a className="ex__link" href="https://www.stacymark.com">Open Gallery &raquo;</a>
                  <br/>
                  <a className="ex__link" href="https://github.com/smark73/stacymark">Github Repo &raquo;</a>
                </div>

              </div>
            </div>
            <div className="ex__row1-right">
              <ul className="ex__skills-ul">
                <li className="ex__skills-li"><span className="ex__skills">JavaScript</span></li>
                <li className="ex__skills-li"><span className="ex__skills">PhotoSwipe JS</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Isotope JS</span></li>
                <li className="ex__skills-li"><span className="ex__skills">PHP</span></li>
                <li className="ex__skills-li"><span className="ex__skills">HTML5</span></li>
                <li className="ex__skills-li"><span className="ex__skills">CSS3/SCSS</span></li>
                <li className="ex__skills-li"><span className="ex__skills">MySQL</span></li>
                <li className="ex__skills-li"><span className="ex__skills">Git</span></li>
                <li className="ex__skills-li"><span className="ex__skills">WordPress</span></li>
              </ul>
            </div>
          </div>

          <div className="ex__row2">
            
            <section className="ex__img-grid ex__img-grid--2col">
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}>
                  <img src="/img/ex-skm-1-sm.jpg" width="auto" height="auto" alt="Example - Stacy Mark Paintings" />
                </Link>
              </div>
              <div className="ex__img">
                <Link to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}>
                  <img src="/img/ex-skm-2-sm.jpg" width="auto" height="auto" alt="Example - Stacy Mark Paintings" />
                </Link>
              </div>
            </section>

          </div>

        </article>


        <div className="ex__spacer">
          <div className="ex__sep-bg">
            <div className="ex__sep"></div>
          </div>
        </div>

        
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

      </div>

    )
  }
}

export default Examples;
