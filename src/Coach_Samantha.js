import React from 'react';
import article from './articles';
import { NavigationGl } from './components/NavigationGl';
import { CoachMainEt } from './components/CoachMainEt';
import photo_1 from './images/people/p_5_3.png';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Coach_Samantha extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <header className="headCoachEt">
          <NavigationGl />
        </header>
        <CoachMainEt articulos={[article[4].coach_03, article[4].post_02, article[4].life_01, article[4].play_03, article[4].text_01]}
          foto={photo_1} nombre={"Samantha's Insta"}>
          <h1 className="nameCoachEt alignLf"><span>S</span><span>a</span><span>m</span><span>a</span><span>n</span><span>t</span><span>h</span><span>a</span></h1>
        </CoachMainEt>
        <BannerBottomGl clase={['announce margAnnAq', '']}
          articulos={['', '', article[2].bunn_01, article[2].price_01, article[2].class_01]} />
        <FooterGl />
        <ModalsGl pathname={this.props.history.location.pathname} />
      </>
    );
  }
}
