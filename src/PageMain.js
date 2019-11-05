import React from 'react';
import { Link } from "react-router-dom";
import article from './articles';
import { GlTopNav } from './components/GlTopNav';
import GlSetRateLine from './components/GlSetRateLine';
import { GlSetImgText } from './components/GlSetImgText';
import photo_1 from './images/add/add_1_1.png';
import photo_2 from './images/add/add_1_2.png';
import photo_3 from './images/add/add_1_3.png';
import { GlGreenLine } from './components/GlGreenLine';
import line_1 from './images/pattern/pattern_bg_1_3.png';
import GlCalendar from './components/GlCalendar';
import { GlCommunity } from './components/GlCommunity';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";

class PageMain extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <header className="headAq">
          <GlTopNav />
          <article className="headGroupAq">
            <section>
              <article className=" flex">
                <hgroup>
                  <h1>{article[0].title_01}</h1>
                  <h5 className="darkblue"><span></span>NEW STANDART</h5>
                  <h1 className="monthAq">35 <span>€</span><span>/ MONTH</span></h1>
                </hgroup>
              </article>
            </section>
          </article>
        </header>
        <main>
          <section className="bannerTopAq flex">
            <article>
              <div className="flex wrap">
                <div className="column bannerRegAq shadow">
                  <i className="announce"></i>
                  <h2>17<span>€</span></h2>
                  <h4>3 classes</h4>
                  <Link to="/schedule" className="buttBanGreen">Register trial</Link>
                </div>
                <div className="column bannerBookAq shadow">
                  <h3>Connected<br />to Results</h3>
                  <Link to="/pricing" className="buttBanWhite">Book next class</Link>
                </div>
              </div>
              <div className="bannerNumAq shadow">
                <h4>Number of memberships is limited!</h4>
                <GlSetRateLine />
                <p className="soldGl"><span>{article[2].member}</span>% SOLD</p>
              </div>
            </article>
          </section>
          <section>
            <GlSetImgText articulos={[article[0].title_01, '', article[1].text_01]} foto={photo_1} link={'/training'} />
            <div className="flex wrap iconsAq">
              <div>
                <i></i>
                <h4>More time for personal support</h4>
              </div>
              <div>
                <i></i>
                <h4>35 minutes to better training success</h4>
              </div>
              <div>
                <i></i>
                <h4>Versatile training incentives for success</h4>
              </div>
            </div>
          </section>
          <GlGreenLine modelo={line_1} />
          <section>
            <article className="margBot wowAq">
              <hgroup>
                <h2>{article[0].title_01}</h2>
                <h1><span></span>35<span>€</span><span> /MONTH</span></h1>
              </hgroup>
              <h2>How is it possible now?</h2>
            </article>
            <GlSetImgText articulos={['', article[0].title_08, article[1].text_02]} foto={photo_2} link={'/training'} />
            <GlSetImgText articulos={['', article[0].title_09, article[1].text_03]} foto={photo_3} clase="orderTwo" link={'/training'} />
            <div className="flex wrap alignLf pickAq">
              <h2>Pick a day and give it a try!</h2>
              <h5>{article[1].text_04}</h5>
            </div>
          </section>
          <GlCalendar />
          <section>
            <h4 className="nextWeekGl">or you are coming next week?</h4>
            <Link to="/schedule" className="white">View all schedule</Link>
          </section>
          <GlGreenLine modelo={line_1} />
          <GlCommunity articulos={article[1]} />
          <GlBannerBottom clase={['announce margAnnAq', '']}
            articulos={['', '', article[2].bunn_01, article[2].price_01, article[2].class_01]} />
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageMain;