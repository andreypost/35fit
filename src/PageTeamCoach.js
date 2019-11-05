import React from 'react';
// import { Link } from "react-router-dom";
import article from './articles';

import { GlHeader } from './components/GlHeader';
// import { GlGreenLine } from './components/GreenLineGl';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";

class PageTeamCoach extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <GlHeader articulos={[article[0].title_04, article[1].text_04]} clase="headEt" />

          <GlBannerBottom clase={['announce margAnnAq', '']}
            articulos={['', '', article[2].bunn_01, article[2].price_01, article[2].class_01]} />
			
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageTeamCoach;