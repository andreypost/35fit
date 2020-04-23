import React from 'react';
import article from './articles';
import { Link } from "react-router-dom";
import { NavigationGl } from './components/NavigationGl';
import photo_1 from './images/add/add_5_1.png';
import { GreenLineGl } from './components/GreenLineGl';
import line_1 from './images/pattern/pattern_bg_7_1.png';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Blog_Article extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <header className="headCoachEt">
          <NavigationGl />
        </header>
        <main>
          <section>
            <div className="alignLf artBlogHb">
              <Link to="/blog" className="white">Back to List</Link>
              <hgroup>
                <h5>29 November 2018</h5>
                <h1 className="alignCtr">A great way to generate all the motivation You need to get fit</h1>
              </hgroup>
            </div>
            <article className="articleHb">
              <div className="flex artContHb">
                <div className="selfStart">
                  <h5 className="alignLf">The 12 steps to acquire mind-power is intended to build positive visuals, acquire mind power and help you achieve your dreams and desires that may be as varied as improving your personality, increasing your wealth, attracting love and making yourself attractive.</h5>
                </div>
                <div>
                  <img src={photo_1} alt="" className="shadow" />
                </div>
              </div>
              <article className="alignLf artStepHb">
                <div>
                  <p>Step One: Choose a quiet place, which is free from all distraction, interruption or disturbance. This may even be inside a bus or in your own room. The idea is to be able to concentrate in any environment that you find is suitable. The ideal is to be able to concentrate in any environment that you find is suitable. The ideal time, however, I have found to be is, early in the morning or before going to bed. The ideal place however, may be anywhere as long as you can concentrate.</p>
                </div>
                <div>
                  <p>Step Two: Feel comfortable. Wear loose clothes or else loosen your belt and tie.</p>
                </div>
                <div>
                  <p>Step Three: Be comfortable. Keep your spine straight. Loosen your hands. Relax! This eases your body tension and helps your blood circulate efficiently.</p>
                </div>
                <div>
                  <p>Step Four: Close your eyes. That way your physical world does not interrupt you and you can concentrate on your mental world. But avoid quenching your eyes. Close them gently. In fact, once you focus on your images, you may find your eyes closing naturally.</p>
                </div>
                <div>
                  <p>Step Five: Breathe normally. Let your body roll with the rhythm of your breathing. Listen to that rhythm.</p>
                </div>
                <div>
                  <p>Step Six: Now begin the process of visualization. Create the key images of the subject you have chosen. Form the shape. Add color. Build the sound. Sense them! Focus on them. See them as sharply and clearly as you can with your mind’s eye.</p>
                </div>
              </article>
            </article>
          </section>
          <GreenLineGl modelo={line_1} />
          <section className="linkBlogFc">
            <h2 className="alignLf">Other posts</h2>
            <div className="flex alignStart setArtTextHb">
              <div className="column alignLf alignStart">
                <h6 className="flex"><span>9</span> December</h6>
                <Link to="/blog_article" className="lightgreen">A Great Way To Generate All The Motivation You Need To Get Fit</Link>
                <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
              </div>
              <div className="column alignLf alignStart">
                <h6 className="flex"><span>28</span> November</h6>
                <Link to="/blog_article" className="lightgreen">Southern Cooking Brings Soul To Food</Link>
                <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
              </div>
              <div className="column alignLf alignStart">
                <h6 className="flex"><span>28</span> November</h6>
                <Link to="/blog_article" className="lightgreen">Motivation Letter For Work Abroad</Link>
                <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
              </div>
            </div>
            <h4>There is a lot more stuff to read!</h4>
            <Link to="/blog" className="white margPers">Read our blog</Link>
          </section>
        </main>
        <BannerBottomGl clase={['announce margAnnBt', 'margLBt']}
          articulos={['', article[2].bunn_02, '', article[2].price_01, article[2].class_02]} />
        <FooterGl />
        <ModalsGl pathname={this.props.history.location.pathname} />
      </>
    );
  }
}
