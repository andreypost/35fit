import React from 'react';
import article from './articles';
import { HeaderGl } from './components/HeaderGl';
import photo_1 from './images/people/p_5_1.png';
import photo_2 from './images/people/p_5_2.png';
import photo_3 from './images/people/p_5_3.png';
import photo_4 from './images/people/p_5_4.png';
import photo_5 from './images/people/p_5_5.png';
import photo_6 from './images/people/p_5_6.png';
import { GreenLineGl } from './components/GreenLineGl';
import line_1 from './images/pattern/pattern_bg_3_2.png';
import { CoachEt } from './components/CoachEt';
import photo_7 from './images/add/add_5_1.png';
import { SetImgTextGl } from './components/SetImgTextGl';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Team extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <HeaderGl articulos={[article[0].title_04, article[1].text_04]} clase="headEt" />
        <main>
          <section>
            <div className="flex wrap teamEt">
              <CoachEt foto={photo_1} articulos={[article[4].coach_01, article[4].post_01]}  link={'/coach_joyce'} />
              <CoachEt foto={photo_2} articulos={[article[4].coach_02, article[4].post_02]}  link={'/coach_john'} />
              <CoachEt foto={photo_3} articulos={[article[4].coach_03, article[4].post_02]}  link={'/coach_samantha'} />
              <CoachEt foto={photo_4} articulos={[article[4].coach_04, article[4].post_01]}  link={'/coach_cameron'} />
              <CoachEt foto={photo_5} articulos={[article[4].coach_05, article[4].post_02]}  link={'/coach_marvin'} />
              <CoachEt foto={photo_6} articulos={[article[4].coach_06, article[4].post_02]}  link={'/coach_kayla'} />
            </div>
          </section>
          <GreenLineGl modelo={line_1} />
          <section className="margBot">
            <h2 className="margPers">Training personally</h2>
            <SetImgTextGl articulos={['', article[0].title_10, article[1].text_04]} foto={photo_7} clase="orderTwo" link={'/club'} />
          </section>
          <BannerBottomGl clase={['announce margAnnAq', '']}
            articulos={['', '', article[2].bunn_01, article[2].price_01, article[2].class_01]} />
        </main>
        <FooterGl />
        <ModalsGl pathname={this.props.history.location.pathname} />
      </>
    );
  }
}
