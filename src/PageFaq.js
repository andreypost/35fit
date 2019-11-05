import React from 'react';
import { GlHeader } from './components/GlHeader';
// import { GlGreenLine } from './components/GreenLineGl';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";
import article from './articles';

class PageFaq extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <main>
          <GlHeader articulos={[article[0].title_07, article[1].text_04]} clase="headIx" />
          <GlBannerBottom clase={['redRoundGl roundTextGl margAnnCd', '']}
            articulos={[article[2].icon_01, article[2].bunn_03, '', article[2].price_02, article[2].class_03]} />
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageFaq;