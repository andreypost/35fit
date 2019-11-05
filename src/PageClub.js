import React from 'react';
import { GlHeader } from './components/GlHeader';
// import { GlGreenLine } from './components/GreenLineGl';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";
import article from './articles';

class PageClub extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <main>
          <GlHeader articulos={[article[0].title_05, article[1].text_04]} clase="headFc" />
          <GlBannerBottom clase={['redRoundGl roundTextGl margAnnDl', '']}
            articulos={[article[2].icon_02, article[2].bunn_04, '', article[2].price_03, article[2]._class_04, article[2].price_04]} />
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageClub;

