import React from 'react';
import { HeaderGl } from './components/HeaderGl';
import { GreenLineGl } from './components/GreenLineGl';
import line_1 from './images/pattern/pattern_bg_3_2.png';
import photo_1 from './images/icons/icon_8_1.png';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";
import article from './articles';

export default class Faq extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    const ShowHideTextClick = (blocks) => {
      if (!blocks) return
      for (let cont of blocks) {
        let points = cont.querySelectorAll('#plusIcGl'),
            texts = cont.querySelectorAll('.slideContGl'),
            pointGl, textGl
        for (let i = 0; i < points.length; i++) {
          // eslint-disable-next-line no-loop-func
          points[i].onclick = function (e) {
            if (!pointGl) {
              pointGl = points[i]
              textGl = texts[i]
            } else if (pointGl === points[i]) {
              removeClass(points[i], texts[i])
              pointGl = textGl = null
              return
            } else if (pointGl) {
              removeClass(pointGl, textGl)
              pointGl = points[i]
              textGl = texts[i]
            }
            addClass(pointGl, textGl)
          }
        }
      }
      const addClass = (p, t) => {
        p.classList.add('transGl')
        t.classList.add('disBlockGl')
      }
      const removeClass = (p, t) => {
        p.classList.remove('transGl')
        t.classList.remove('disBlockGl')
      }
    }
    ShowHideTextClick(document.querySelectorAll('.setRightRollGl'))
  }
  render() {
    return (
      <>
        <HeaderGl articulos={[article[0].title_07, article[1].text_04]} clase="headIx" />
        <main>
          <section className="faqContIx">
            <div className="flex setRollBlGl">
              <div className="selfStart alignLf setLeftRollGl">
                <h2 className="darkblue">General</h2>
              </div>
              <div className="setRightRollGl selfStart">
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer a monthly membership?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer gift certificates?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Can I redeem a class and get cash back?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer a monthly membership?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>What if I can't do everything in the class? I haven't worked out in a while.</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
              </div>
            </div>
            <div className="flex setRollBlGl">
              <div className="selfStart alignLf setLeftRollGl">
                <h2 className="darkblue">Science<br />behind</h2>
              </div>
              <div className="setRightRollGl selfStart">
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Is there any way to make the seat more comfortable?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer gift certificates?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Can I redeem a class and get cash back?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer a monthly membership?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>What if I can't do everything in the class? I haven't worked out in a while.</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
              </div>
            </div>
            <div className="flex setRollBlGl">
              <div className="selfStart alignLf setLeftRollGl">
                <h2 className="darkblue">Dynostics</h2>
              </div>
              <div className="setRightRollGl selfStart">
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Is there any way to make the seat more comfortable?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer gift certificates?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Can I redeem a class and get cash back?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>Do you offer a monthly membership?</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
                <div className="flex justStart alignLf">
                  <div>
                    <i id="plusIcGl"></i>
                  </div>
                  <h6>What if I can't do everything in the class? I haven't worked out in a while.</h6>
                </div>
                <p className="slideContGl alignLf">No. SoulCycle does not offer memberships. It does not require any long-term commitment. Rather, you can buy as many or as few classes as you like. If you want to buy one class, that's fine. But, if you're riding regularly, our larger series offer a price discount. To see our class pricing, click HERE.</p>
                <div className="divLineHzGl"></div>
              </div>
            </div>
          </section>
          <GreenLineGl modelo={line_1} />
          <section className="answerIx">
            <h4>Can’t find an answer to you question?</h4>
            <h4>Get in touch!</h4>
            <div>
              <img src={photo_1} alt="" />
            </div>
            <div className="column">
              <a href="mailto: info@35fit.com" target="_blanc" className="lightgreen">info@35fit.com</a>
              <a href="tel: +372 55 613 201">+372 55 613 201</a>
            </div>
          </section>
          <BannerBottomGl clase={['redRoundGl roundTextGl margAnnCd', '']}
            articulos={[article[2].icon_01, article[2].bunn_03, '', article[2].price_02, article[2].class_03]} />
        </main>
        <FooterGl />
        <ModalsGl pathname={this.props.history.location.pathname} />
      </>
    );
  }
}
