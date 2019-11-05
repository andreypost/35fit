import React from 'react';
import article from './articles';
import { GlHeader } from './components/GlHeader';
import photo_1 from './images/people/p_5_1.png';
import photo_2 from './images/people/p_5_2.png';
import photo_3 from './images/people/p_5_3.png';
import photo_4 from './images/people/p_5_4.png';
import photo_5 from './images/people/p_5_5.png';
import photo_6 from './images/people/p_5_6.png';
import { GlGreenLine } from './components/GlGreenLine';
import { GlCoach } from './components/GlCoach';
import line_1 from './images/pattern/pattern_bg_3_2.png';
import photo_7 from './images/add/add_5_1.png';
import { GlSetImgText } from './components/GlSetImgText';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";

class PageTeam extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <GlHeader articulos={[article[0].title_04, article[1].text_04]} clase="headEt" />
        <main>
          <section>
            <div className="flex wrap teamEt">
              <GlCoach foto={photo_1} articulos={[article[4].coach_01, article[4].post_01]} />
              <GlCoach foto={photo_2} articulos={[article[4].coach_02, article[4].post_02]} />
              <GlCoach foto={photo_3} articulos={[article[4].coach_03, article[4].post_02]} />
              <GlCoach foto={photo_4} articulos={[article[4].coach_04, article[4].post_01]} />
              <GlCoach foto={photo_5} articulos={[article[4].coach_05, article[4].post_02]} />
              <GlCoach foto={photo_6} articulos={[article[4].coach_06, article[4].post_02]} />
            </div>
          </section>
          <GlGreenLine modelo={line_1} />
          <section className="margBot">
            <h2 className="margPers">Training personally</h2>
            <GlSetImgText articulos={['', article[0].title_10, article[1].text_04]} foto={photo_7} clase="orderTwo" link={'/club'} />
          </section>
          <GlBannerBottom clase={['announce margAnnAq', '']}
            articulos={['', '', article[2].bunn_01, article[2].price_01, article[2].class_01]} />
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageTeam;