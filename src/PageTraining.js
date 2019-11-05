/* eslint-disable no-loop-func */
/* eslint-disable eqeqeq */
import React from 'react';
import article from './articles';
import { Link } from "react-router-dom";
import { GlHeader } from './components/GlHeader';
import { GlGreenLine } from './components/GlGreenLine';
import line_1 from './images/pattern/pattern_bg_1_3.png';
import add_1 from './images/add/add_2_1.png';
import add_2 from './images/add/add_2_2.png';
import pattern_1 from './images/pattern/pattern_bg_2_1.png';
import pattern_2 from './images/pattern/pattern_bg_2_2.png';
import add_3 from './images/add/add_2_3.png';
import people_1 from './images/people/p_2_1.png';
import people_2 from './images/people/p_2_2.png';
import people_3 from './images/people/p_2_3.png';
import people_4 from './images/people/p_2_4.png';
import add_4 from './images/add/add_2_4.png';
import add_5 from './images/add/add_2_4_1.png';
import add_6 from './images/add/add_2_5.png';
import add_7 from './images/add/add_2_6.png';
import add_8 from './images/add/add_2_7.png';
import add_9 from './images/add/add_2_8.png';
import { GlBannerBottom } from './components/GlBannerBottom';
import { GlFooter } from './components/GlFooter';
import JsGlobalModals from "./components/JsGlobalModals";

class PageTraining extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    let pointGl, textGl
    function ShowHideTextClick(options) {
      let cont = options.cont
      if (!cont) return
      let texts = options.texts
      let points = cont.querySelectorAll('#plusIcGl')

      for (let i = 0; i < points.length; i++) {
        points[i].onclick = () => {
          if (!pointGl) {
            pointGl = points[i]
            textGl = texts[i]
          } else if (pointGl == points[i]) {
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
      function addClass(p, t) {
        p.classList.add('transGl')
        t.classList.add('disBlockGl')
      }
      function removeClass(p, t) {
        p.classList.remove('transGl')
        t.classList.remove('disBlockGl')
      }
    }
    function ShowTextClick(options) {
      let cont = options.cont
      if (!cont) return
      let texts = options.texts
      let points = cont.querySelectorAll('#plusIcGl')

      for (let i = 0; i < points.length; i++) {
        points[i].onclick = function () {
          points[i].classList.toggle('transGl')
          texts[i].classList.toggle('disBlockGl')
        }
      }
    }
    new ShowTextClick({
      cont: document.querySelector('.nutritionBt'),
      texts: document.querySelectorAll('.slideTxtBt')
    })
    new ShowHideTextClick({
      cont: document.querySelector('.setRightRollGl'),
      texts: document.querySelectorAll('.slideContGl')
    })
  }
  render() {
    return (
      <div>
        <GlHeader articulos={[article[0].title_01, article[1].text_01]} clase="headBt" />
        <main>
          <article className="itensityBt">
            <section className="relative">
              <h5 className="itensityTextBt">{article[1].text_02}</h5>
              <div className="blockItensityBt flex wrap">
                <div className="alwaysBt selfStart">
                  <h4><span></span>Always the right equipment setting</h4>
                  <p>Thanks to the user recognition feature, the smart equipment adjusts automatically and within seconds to the user’s size, training motive, and related needs.</p>
                  <h4><span></span>Keeping training exciting</h4>
                  <p>With milon training, you can achieve any goal in a focused way. Whether it’s muscle building, losing weight, or reducing pain.</p>
                </div>
                <div className="relative">
                  <img src={add_1} alt="" />
                </div>
                <div className="makingBt selfStart">
                  <h4><span></span>Making achievement fun</h4>
                  <p>The gamification elements on the display encourage users’ instinct to play and make training more fun – which has a motivating and inspiring effect.</p>
                  <h4><span></span>More time</h4>
                  <p>Patented training visualization. The milon pendulum displays the movement rhythm to the user and provides direct live feedback during training. Using the pendulum is extremely intuitive by tapping and swiping (like a tablet).</p>
                </div>
              </div>
              <div className="flex justBet minutesBt">
                <div className="intensRoundBt redRoundGl">
                  <h2>35</h2>
                  <h4>minutes</h4>
                  <h6>HIGH INTENSITY<br />TRAINING</h6>
                </div>
                <div>
                  <img src={add_2} alt="" />
                </div>
              </div>
            </section>
          </article>
          <article className="sectionBt">
            <section className="flex circuitsBt">
              <article className="six">
                <h2>35FIT Circuits with <br /> Milon Equipment</h2>
                <h5>Broad range of training circuits spans every need and every performance level: from health-oriented basic training to specifically targeted strength training.</h5>
              </article>
            </section>
            <div className="flex ovalBt">
              <img src={pattern_1} alt="" />
            </div>
            <section>
              <div className="relative ovalVerticalBt">
                <img src={pattern_2} alt="" />
                <i className="roundBt"></i>
                <i className="roundBt hartBt"></i>
                <i className="roundBt arrowBt"></i>
              </div>
              <div className="cardioBt flex wrap">
                <div>
                  <i className="roundBt"></i>
                  <h3>CARDIO CIRCUIT</h3>
                  <p>We offer maximum versatility and flexibility for your training space. From cardio equipment, to expansions for individual circuits, multiple circuits, or equipment for gym floor. </p>
                </div>
                <div>
                  <i className="roundBt hartBt"></i>
                  <h3>STRENGTH-ENDURANCE CIRCUIT</h3>
                  <p>Thanks to its broad spectrum of equipment, milon’s Strength-Endurance circuit is suitable both as training for the beginner and as performance training for the advanced user. </p>
                </div>
                <div>
                  <i className="roundBt arrowBt"></i>
                  <h3>STRENGTH CIRCUIT</h3>
                  <p>Users’ motives and goals vary greatly. The expansion of the Q series range to include the latest strength training equipment now makes more varied training possible, especially when it comes to effective muscle building.</p>
                </div>
              </div>
            </section>
            <section className="trainingContBt">
              <div className="trainingImgBt">
                <img src={add_3} alt="" className="shadow" />
              </div>
              <div className="flex setRollBlGl">
                <div className="selfStart alignLf setLeftRollGl">
                  <h3 className="darkblue">Training types</h3>
                </div>
                <div className="setRightRollGl selfStart">
                  <div className="flex justStart alignLf">
                    <div>
                      <i id="plusIcGl"></i>
                    </div>
                    <h4>Adaptive training</h4>
                  </div>
                  <p className="slideContGl alignLf">The equipment automatically adjusts the weight in real time to fatigue the muscles to the maximum possible level. Hypertrophy stimulation is guaranteed.</p>
                  <div className="divLineHzGl"></div>
                  <div className="flex justStart alignLf">
                    <div>
                      <i id="plusIcGl"></i>
                    </div>
                    <h4>Normal training</h4>
                  </div>
                  <p className="slideContGl alignLf">{article[1].text_05}</p>
                  <div className="divLineHzGl"></div>
                  <div className="flex justStart alignLf">
                    <div>
                      <i id="plusIcGl"></i>
                    </div>
                    <h4>Isokinetic training</h4>
                  </div>
                  <p className="slideContGl alignLf">{article[1].text_05}</p>
                  <div className="divLineHzGl"></div>
                  <div className="flex justStart alignLf">
                    <div>
                      <i id="plusIcGl"></i>
                    </div>
                    <h4>Eccentric training</h4>
                  </div>
                  <p className="slideContGl alignLf">The training resistance is increased in the eccentric (muscle lengthening) phase of movement, making training up to 30 % more effective in comparison to training with a constant weight.</p>
                  <div className="divLineHzGl"></div>
                </div>
              </div>
              <div className="redRoundGl agesBt">
                <p>AGES:</p>
                <h3>15-60+</h3>
              </div>
            </section>
          </article>
          <section>
            <div>
              <div className="flex wrap alignStart builtBt">
                <h2>Built for everyone</h2>
                <h5 className="alignLf">{article[1].text_06}</h5>
              </div>
              <div className="flex wrap alignStart peopleBt">
                <div>
                  <h4>Pain-free<br />training</h4>
                  <div className="borBotGreyGl">
                    <img src={people_1} alt="" />
                  </div>
                  <p className="alignLf">This regime addresses the root causes underlying physical discomfort and can reduce pain.</p>
                </div>
                <div>
                  <h4>Weight<br />reduction</h4>
                  <div className="borBotGreyGl">
                    <img src={people_2} alt="" />
                  </div>
                  <p className="alignLf">In order to lose weight, the key to success lies in the specific combination of endurance training and moderate strength training in the high reps range.</p>
                </div>
                <div>
                  <h4>Muscle<br />building</h4>
                  <div className="borBotGreyGl">
                    <img src={people_3} alt="" />
                  </div>
                  <p className="alignLf">Building up muscle mass requires a training load with an elevated weight. Training large muscle groups is a particularly important part of an effective muscle building program.</p>
                </div>
                <div>
                  <h4>Firming <br /><span></span></h4>
                  <div className="borBotGreyGl">
                    <img src={people_4} alt="" />
                  </div>
                  <p className="alignLf">For women especially, fitness training often begins with the goal of improving their figure. In such cases, specifically geted strength training is the most effective way to reduce body fat.</p>
                </div>
              </div>
            </div>
          </section>
          <article className="bracleteBt lightGreyBgGl">
            <section className="column wrap">
              <hgroup className="flex">
                <h2 className="seven">The next generation of smart training control.</h2>
              </hgroup>
              <div className="selfStart oneBracBt relative">
                <img src={add_4} alt="" />
              </div>
              <div className="selfStart bracleteTextBt alignLf">
                <h3>Personal key braclete</h3>
                <p>All of the member’s key details can be <br /> seen at a glance on the display.</p>
              </div>
              <div className="twoBracBt relative">
                <img src={add_5} alt="" />
              </div>
            </section>
          </article>
          <article className="milonizerBt">
            <section>
              <div className="flex wrap">
                <div className="measureBt alignLf">
                  <div className="milonizerTextBt">
                    <h3>Milonizer 3.0</h3>
                    <h5>Measure, weigh, test, and analyze in a totally new dimension.</h5>
                    <p>The milonizer can determine the user’s body measurements in a matter of seconds using an innovative scan system based on biometric markers. The measured data is automatically communicated to the milon CARE control software and all milon equipment is perfectly preset to the user’s body dimensions. An in-depth analysis of the user’s current performance level is created taking into account the various tests.</p>
                  </div>
                  <div className="flex alignCtr iconsMilBt">
                    <div>
                      <i></i>
                      <p>5-sec <br /> scan</p>
                    </div>
                    <div>
                      <i></i>
                      <p>Fitness <br /> test</p>
                    </div>
                    <div>
                      <i></i>
                      <p>Mobility <br /> test</p>
                    </div>
                  </div>
                </div>
                <div className="milonizerImgBt">
                  <img src={add_6} alt="" />
                </div>
              </div>
            </section>
          </article>
          <section>
            <article className="flex wrap dynosticsBt">
              <div>
                <img src={add_7} alt="" />
              </div>
              <h5 className="alignLf">{article[1].text_06}</h5>
            </article>
            <div>
              <img src={add_8} alt="" className="shadow" />
            </div>
            <article className="flex wrap alignStart alignLf nutritionBt">
              <div className="flex">
                <div className="selfStart showNutrBt">
                  <i></i>
                  <i id="plusIcGl"></i>
                </div>
                <div className="nutrTextBt">
                  <h4>Nutrition test</h4>
                  <div className="slideTxtBt">
                    <i></i>
                    <h6>Metabolism analysis for a tailored nutritional and training strategy.</h6>
                    <p>{article[1].text_07}</p>
                    <h4>Non-member’s price: 45€</h4>
                    <Link to="/schedule" className="white">Book your test</Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="selfStart showNutrBt">
                  <i></i>
                  <i id="plusIcGl"></i>
                </div>
                <div className="nutrTextBt">
                  <h4>Performance test</h4>
                  <div className="slideTxtBt">
                    <i></i>
                    <h6>With the performance analysis to the individual pulse ranges.</h6>
                    <p>{article[1].text_07}</p>
                    <h4>Non-member’s price: 50€</h4>
                    <Link to="/schedule" className="white">Book your test</Link>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <GlGreenLine modelo={line_1} />
          <section>
            <article className="flex wrap milonBt">
              <div className="alignLf">
                <hgroup>
                  <h3 className="darkblue">Detaild training review. MilonMe app.</h3>
                  <h5>Milon ME is the free app for club members. It makes it easier to view your own training data – anywhere, anytime.</h5>
                  <h4>Features</h4>
                </hgroup>
                <div className="flex">
                  <div className="column milonIcBt">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <div className="column alignStart milonTextBt">
                    <h6>Tracking the training plan</h6>
                    <h6>Shows correct way to do exercise</h6>
                    <h6>Overview of training and progress</h6>
                    <h6>Training stats</h6>
                    <h6>For milon devices and equipment-free exercises</h6>
                    <h6>Share training successes</h6>
                  </div>
                </div>
              </div>
              <div className="milonButtBt alignLf">
                <div className="alignCtr">
                  <img src={add_9} alt="" />
                </div>
                <div className="flex">
                  <Link to="/club" className="appStoreBt"></Link>
                  <Link to="/club" className="googlePlayBt"></Link>
                </div>
                <p>The integrated news function now makes communicating with your trainer even easier, more effective, and faster and provides continual motivation.</p>
                <p>You can also track your progress with milon ME. From training sessions and training regularity, to special achievements.</p>
              </div>
            </article>
            <GlBannerBottom clase={['announce margAnnBt', 'margLBt']}
              articulos={['', article[2].bunn_02, '', article[2].price_01, article[2].class_02]} />
          </section>
        </main>
        <GlFooter />
        <JsGlobalModals pathname={this.props.history.location.pathname} />
      </div>
    );
  }
}
export default PageTraining;