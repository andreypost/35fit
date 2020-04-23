import React from 'react';
import { Link } from "react-router-dom";
import { HeaderGl } from './components/HeaderGl';
import { GreenLineGl } from './components/GreenLineGl';
import line_1 from './images/pattern/pattern_bg_3_2.png';
import line_2 from './images/pattern/pattern_bg_1_3.png';
import photo_1 from './images/pattern/stroke_6_1.png';
import photo_2 from './images/add/add_6_1.png';
import photo_3 from './images/add/add_6_2.png';
import photo_4 from './images/add/add_6_3.png';
import { CommunityGl } from './components/CommunityGl';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";
import article from './articles';

export default class Club extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <HeaderGl articulos={[article[0].title_05, article[1].text_04]} clase="headFc" />
        <main>
          <section>
            <div className="flex blockGonsFc">
              <div className="column alignStart">
                <h2>Gonsiori</h2>
                <div className="gonsioriGl gonsioriFc alignLf">
                  <p className="relative"><span></span>Gonsiori 33<br /><span> Tallinn, Estonia</span></p>
                  <a href=" " className="lightgreen">View on Google Maps</a>
                </div>
                <div className="scheduleFc alignLf">
                  <p className="relative"><span></span>Mon - Fri <span className="schedTimeFc"> 6:30-21:30</span><br />Sat / Sun <span className="schedTimeFc"> 9:00-19:00</span> </p>
                </div>
              </div>
              <div className="column relative">
                <img src={photo_1} alt="" className="lineFc" />
                <img src={photo_2} alt="" className="shadow" />
              </div>
              <div className="column alignStart">
                <div className="textGonsFe alignLf">
                  <h6>Getting there & Parking</h6>
                  <p>After booking training time, we will send you QR code to you open entrance door. Further you'll get personal key-bracelet, you will use to open door and activate equipment.</p>
                  <a href=" " className="lightgreen">View parking options on Google Maps</a>
                </div>
                <div className="column alignStart relative contactFc">
                  <a href="mailto: info@35fit.com" target="_blanc" className="lightgreen"><span></span>info@35fit.com</a>
                  <a href="tel: +372 55 613 201">+372 55 613 201</a>
                </div>
              </div>
            </div>
          </section>
          <section className="margBot">
            <div className="mapFc">
              <div id="mapFc"></div>
              <img src={photo_3} alt="" />   {/* remove */}
              <img src={photo_4} alt="" /> {/* remove */}
            </div>
          </section>
          {/*https://developers.google.com/maps/documentation/javascript/get-api-key*/}
          {/* <script>
                var map;
                function initMap() {
                  map = new google.maps.Map(document.getElementById('mapFc'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
                  });
                }
              </script>
              <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
              async defer>
              </script> */}
          <section>
            <h4>Stay tuned!<br />More studios are coming.</h4>
          </section>
          <GreenLineGl modelo={line_1} />
          <section className="linkBlogFc">
            <h2 className="alignLf">Blog</h2>
            <div className="flex alignStart setArtTextHb">
              <div className="column alignLf alignStart">
                <h6 className="flex"><span>9</span>December</h6>
                <Link to="/blog_article" className="lightgreen">A Great Way To Generate All The Motivation You Need To Get Fit</Link>
                <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
              </div>
              <div className="column alignLf alignStart">
                <h6 className="flex"><span>28</span>November</h6>
                <Link to="/blog_article" className="lightgreen">Southern Cooking Brings Soul To Food</Link>
                <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
              </div>
              <div className="column alignLf alignStart">
                <h6 className="flex"><span>28</span>November</h6>
                <Link to="/blog_article" className="lightgreen">Motivation Letter For Work Abroad</Link>
                <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
              </div>
            </div>
            <h4>There is a lot more stuff to read!</h4>
            <Link to="/blog" className="white">Read our blog</Link>
          </section>
          <GreenLineGl modelo={line_2} />
          <CommunityGl articulos={[article[4].community_s, article[4].community_e, article[1].text_04]} />
          <BannerBottomGl clase={['redRoundGl roundTextGl margAnnDl', '']}
            articulos={[article[2].icon_02, article[2].bunn_04, '', article[2].price_03, article[2]._class_04, article[2].price_04]} />
        </main>
        <FooterGl />
        <ModalsGl pathname={this.props.history.location.pathname} />
      </>
    );
  }
}


