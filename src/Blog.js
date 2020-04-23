import React from 'react';
import article from './articles';
import { Link } from "react-router-dom";
import { NavigationGl } from './components/NavigationGl';
import photo_1 from './images/add/add_7_1.png';
import { BannerBottomGl } from './components/BannerBottomGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Blog extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        let pointGl, textGl
        const ShowHideTextClick = (blocks) => {
            if (!blocks) return
            for (let cont of blocks) {
                let points = cont.querySelectorAll('#plusIcGl'),
                    texts = cont.querySelectorAll('.slideContGl')
                for (let i = 0; i < points.length; i++) {
                    // eslint-disable-next-line no-loop-func
                    points[i].onclick = function (e) {
                        console.log(this)
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
        ShowHideTextClick(document.querySelectorAll('.setRollHb'))
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
                            <Link to="/club" className="white">Back to Club</Link>
                            <hgroup>
                                <h1>Blog</h1>
                            </hgroup>
                        </div>
                        <div>
                            <img src={photo_1} alt="" className="shadow" />
                        </div>
                    </section>
                    <section>
                        <article className="flex alignStart blockArtHb">
                            <div className="articlesHb">
                                <div className="flex alignStart setArtTextHb">
                                    <div className="column alignLf alignStart">
                                        <h6 className="flex"><span>9</span> December</h6>
                                        <Link to="/blog_article" className="lightgreen">A Great Way To Generate All The Motivation You Need To Get Fit</Link>
                                        <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
                                        <div className="flex tagsHb">
                                            <h5>35fit</h5>
                                            <h5>Health</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="divLineHzGl"></div>
                                <div className="flex alignStart setArtTextHb">
                                    <div className="column alignLf alignStart">
                                        <h6 className="flex"><span>28</span> November</h6>
                                        <Link to="/blog_article" className="lightgreen">Southern Cooking Brings Soul To Food</Link>
                                        <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
                                        <div className="flex tagsHb">
                                            <h5>35fit</h5>
                                            <h5>Health</h5>
                                        </div>
                                    </div>
                                    <div className="column alignLf alignStart">
                                        <h6 className="flex"><span>28</span> November</h6>
                                        <Link to="/blog_article" className="lightgreen">Motivation Letter For Work Abroad</Link>
                                        <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
                                        <div className="flex tagsHb">
                                            <h5>Health</h5>
                                            <h5>Food</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="divLineHzGl"></div>
                                <div className="flex alignStart setArtTextHb">
                                    <div className="column alignLf alignStart">
                                        <h6 className="flex"><span>28</span> November</h6>
                                        <Link to="/blog_article" className="lightgreen">Southern Cooking Brings Soul To Food</Link>
                                        <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
                                        <div className="flex tagsHb">
                                            <h5>35fit</h5>
                                            <h5>Health</h5>
                                        </div>
                                    </div>
                                    <div className="column alignLf alignStart">
                                        <h6 className="flex"><span>28</span> November</h6>
                                        <Link to="/blog_article" className="lightgreen">Motivation Letter For Work Abroad</Link>
                                        <p>Training becomes effective due to intensity. The club is engaged and 3 times a week, and 2 times in 10 days.</p>
                                        <div className="flex tagsHb">
                                            <h5>Health</h5>
                                            <h5>Food</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="divLineHzGl"></div>
                            </div>
                            <div className="selectArtHb">
                                <div className="categiriesHb column alignStart shadow">
                                    <h4 className="darkblue">Categories</h4>
                                    <h6 className="lightgreen">35Fit Milon</h6>
                                    <div className="divLineHzGl"></div>
                                    <h6 className="lightgreen">Trainings</h6>
                                    <div className="divLineHzGl"></div>
                                    <h6 className="lightgreen">Food</h6>
                                    <div className="divLineHzGl"></div>
                                    <h6 className="lightgreen">Health</h6>
                                </div>
                                <div className="datesHb column alignStart shadow">
                                    <h4 className="darkblue">Dates</h4>
                                    <div className="setRollHb">
                                        <div className="flex justStart">
                                            <div>
                                                <i id="plusIcGl"></i>
                                            </div>
                                            <h5>2019</h5>
                                        </div>
                                        <div className="slideContGl">
                                            <div className="flex justBet">
                                                <h6>December</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>November</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>October</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>September</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>August</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>July</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>June</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>May</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>April</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>March</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>February</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>January</h6>
                                                <p>3</p>
                                            </div>
                                        </div>
                                        <div className="divLineHzGl"></div>
                                    </div>
                                    <div className="setRollHb">
                                        <div className="flex justStart">
                                            <div>
                                                <i id="plusIcGl"></i>
                                            </div>
                                            <h5>2018</h5>
                                        </div>
                                        <div className="slideContGl">
                                            <div className="flex justBet">
                                                <h6>December</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>November</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>October</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>September</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>August</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>July</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>June</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>May</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>April</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>March</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>February</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>January</h6>
                                                <p>3</p>
                                            </div>
                                        </div>
                                        <div className="divLineHzGl"></div>
                                    </div>
                                    <div className="setRollHb">
                                        <div className="flex justStart">
                                            <div>
                                                <i id="plusIcGl"></i>
                                            </div>
                                            <h5>2017</h5>
                                        </div>
                                        <div className="slideContGl">
                                            <div className="flex justBet">
                                                <h6>December</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>November</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>October</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>September</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>August</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>July</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>June</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>May</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>April</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>March</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>February</h6>
                                                <p>3</p>
                                            </div>
                                            <div className="flex justBet">
                                                <h6>January</h6>
                                                <p>3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form id="newsSubFormHb" className="column alignStart shadow">
                                    <h4 className="darkblue">Newsletter subscription</h4>
                                    <p className="alignLf">Be first in the queue! Get our latest news straight to your inbox.</p>
                                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                                        <legend>E-mail address:</legend>
                                        <input className="inputFiedGl" required="required" placeholder="Enter e-mail address" type="email" name="" />
                                    </fieldset>
                                    <button type="submit" form="newsSubFormHb" className="logoSubGl">Login</button>
                                </form>
                            </div>
                        </article>
                    </section>
                    <BannerBottomGl clase={['announce margAnnBt', 'margLBt']}
                        articulos={['', article[2].bunn_02, '', article[2].price_01, article[2].class_02]} />
                </main>
                <FooterGl />
                <ModalsGl pathname={this.props.history.location.pathname} />
            </>
        );
    }
}
