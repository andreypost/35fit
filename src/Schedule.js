import React from 'react';
import { HeaderGl } from './components/HeaderGl';
import CalendarGl from './components/CalendarGl';
import { GreenLineGl } from './components/GreenLineGl';
import line_1 from './images/pattern/pattern_bg_3_2.png';
import line_2 from './images/pattern/pattern_bg_1_3.png';
import photo_1 from './images/add/add_4_1.png';
import photo_2 from './images/add/add_4_2.png';
import { SetImgTextGl } from './components/SetImgTextGl';
import { CommunityGl } from './components/CommunityGl';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";
import article from './articles';

export default class Schedule extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <HeaderGl articulos={[article[0].title_03, article[1].text_04]} clase="headDl" />
        <main>
          <section className="flex calenDl">
            <h4 className="four">Use the calendar below to find and book suitable time for you</h4>
          </section>
          <CalendarGl />
          <GreenLineGl modelo={line_1} />
          <section className="efficUUDl">
            <h2 className="margPers">Efficiency</h2>
            <SetImgTextGl articulos={['', article[0].title_11, article[1].text_04]} foto={photo_1} />
          </section>
          <article className="effBgDl">
          </article>
          <section>
            <SetImgTextGl articulos={['', article[0].title_11, article[1].text_04]} foto={photo_2} clase="orderTwo" />
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
