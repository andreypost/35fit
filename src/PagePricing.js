/* eslint-disable eqeqeq */
import React from 'react';
import { Link } from "react-router-dom";
import article from './articles';
import { GlHeader } from './components/GlHeader';
import { GlPlan } from './components/GlPlan';
import { GlGreenLine } from './components/GlGreenLine';
import line_1 from './images/pattern/pattern_bg_3_2.png';
import add_1 from './images/add/add_3_1.png';
import add_2 from './images/add/add_3_2.png';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";

class PagePricing extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <GlHeader articulos={[article[0].title_02, article[1].text_04]} clase="headCd" />
        <main className="lightGreyBgGl">
            <article className="pricingBannerCd">
                <section>
                    <div className="flex shadow pricingRegCd">
                        <div className="column">
                            <h3 className="darkblue">{article[2].bunn_01}</h3>
                            <h2 className="lightgreen">17<span className="ueGl">€</span></h2>
                            <h4 className="darkblue">{article[2].class_01}</h4>
                            <Link to="/schedule" className="buttBanGreen">Register for trial</Link>
                        </div>
                        <div className="column alignLf">
                            <p>{article[1].text_08}</p>
                            <p>{article[1].text_08}</p>
                        </div>
                    </div>
                    <div className="flex justBet pricingGroupCd">
                        <GlPlan articulos={[article[3].plan_01, article[3].class_01, article[3].price_01, article[3].month_01, article[3].sold_01]}
                            enlazar="/faq" />
                        <GlPlan articulos={[article[3].plan_02, article[3].class_01, article[3].price_02, article[3].month_02, article[3].sold_02]}
                            enlazar="/club" />
                        <GlPlan articulos={[article[3].plan_03, article[3].class_01, article[3].price_03, article[3].month_03, article[3].sold_03]}
                            enlazar="/team" />
                    </div>
                    <div className="flex pricingGroupCd superFlCd">
                        <div className="blockOptimalGl shadow">
                            <h3 className="darkblue">Super Flex</h3>
                            <h2 className="lightgreen">62<span className="ueGl">€</span></h2>
                            <h4 className="darkblue">15 classes / month</h4>
                            <Link to="/schedule" className="buttBanGreen">Register for trial</Link>
                        </div>
                        <div className="blockOptimalGl shadow lastOptCd">
                            <p>{article[1].text_08}</p>
                        </div>
                    </div>
                </section>
            </article>
            <section className="personaKeyCd">
                <article className="flex wrap alignStart alignLf persImgCd">
                    <div>
                        <h3 className="darkblue">Personal key braclete</h3>
                        <h5>{article[1].text_08}</h5>
                    </div>
                    <div className="alignRt">
                        <img src={add_1} alt="" />
                    </div>
                </article>
                <div className="flex persTxCd">
                    <div className="flex alignLf">
                        <h4>Deposit for the<br />braclete</h4>
                        <h2 className="lightgreen">8<span className="ueGl">€</span></h2>
                    </div>
                </div>
            </section>
            <GlGreenLine modelo={line_1} />
            <section className="flex justBet truggeCd">
                <div className="alignLf">
                    <h3 className="darkblue">Trugge water</h3>
                    <h5>{article[1].text_08}</h5>
                    <div className="flex wrap justBet">
                        <h4>Subscription</h4>
                        <h2 className="lightgreen">4.95<span className="ueGl">€/month</span></h2>
                    </div>
                </div>
                <div>
                    <img src={add_2} className="shadow" alt="" />
                </div>
            </section>
            <GlBannerBottom clase={['redRoundGl roundTextGl margAnnCd', '']}
                articulos={[article[2].icon_01, article[2].bunn_03, '', article[2].price_02, article[2].class_03]} />
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PagePricing;