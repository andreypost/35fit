import React from 'react';
import article from './articles';
import { NavigationGl } from './components/NavigationGl';
import { CoachMainEt } from './components/CoachMainEt';
import photo_1 from './images/people/p_5_6.png';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Coach_Kayla extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <header className="headCoachEt">
          <NavigationGl />
        </header>
        <CoachMainEt articulos={[article[4].coach_06, article[4].post_02, article[4].life_01, article[4].play_06, article[4].text_01]}
          foto={photo_1} nombre={"Kayla's Insta"}>
          <h1 className="nameCoachEt alignLf"><span>K</span><span>a</span><span>y</span><span>l</span><span>a</span></h1>
        </CoachMainEt>
        <BannerBottomGl clase={['announce margAnnAq', '']}
          articulos={['', '', article[2].bunn_01, article[2].price_01, article[2].class_01]} />
        <FooterGl />
        <ModalsGl pathname={this.props.history.location.pathname} />
      </>
    );
  }
}
