import React from 'react';
import { GlHeader } from './components/GlHeader';
// import { GlGreenLine } from './components/GreenLineGl';
import GlCalendar from './components/GlCalendar';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";
import article from './articles';

class PageSchedule extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <GlHeader articulos={[article[0].title_03, article[1].text_04]} clase="headDl" />
        <main>
          <section className="flex calenDl">
            <h4 className="four">Use the calendar below to find and book suitable time for you</h4>
          </section>
          <GlCalendar />
          <GlBannerBottom clase={['redRoundGl roundTextGl margAnnDl', '']}
            articulos={[article[2].icon_02, article[2].bunn_04, '', article[2].price_03, article[2]._class_04, article[2].price_04]} />
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageSchedule;