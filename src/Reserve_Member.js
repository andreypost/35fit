import React from 'react';
import { NavigationGl } from './components/NavigationGl';
import ReserveLineRs from './components/ReserveLineRs';
import photo_3 from './images/icons/icon_9_2.png';
import ReserveFormGl from './components/ReserveFormGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Reserve_Member extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        const setPersRes = (elem) => {
            if (!elem) return
            let persent = new Date().getDate()
            elem.innerHTML = persent * 3 + '%'
        }
        setPersRes(document.querySelector('.persntResGl'))
    }
    render() {
        return (
            <>
                <header>
                    <NavigationGl />
                </header>
                <main>
                    <ReserveLineRs>
                        {'roundDotGlRs'}
                        {'roundLinGlRs'}
                        {'roundDotGlRs'}
                        {'lightgrey'}
                        {'lightgreen'}
                        {'lightgrey'}
                        <p>Identify</p>
                        {/* <p>Mail sent</p> */}
                    </ReserveLineRs>
                    <section className="containerFormRs flex alignStart">
                        <article className="sideLeftRs column justBet alignLf">
                            <div className="icon_9_2">
                                <img src={photo_3} alt="" />
                            </div>
                            {/* <div className="roundPersGl flex">
                                    <i className="flex">
                                        <h3 className="persntResGl darkblue"> </h3>
                                    </i>
                                </div> */}
                            <p>We know so little about you,<br />please keep going.<br />You’re almost there!</p>
                            <p>We know so little about you,<br />please keep going.<br />You’re almost there!</p>
                        </article>
                        <article className="sideRightRs">
                            <hgroup className="alignLf">
                                <h3>New to 35FIT ?<br />Start training quicker</h3>
                                <p className="lightgrey">As one of our main focus is save your time, please fill short information about you, so you can get wristband quicker and start measuring on our Milonizer</p>
                            </hgroup>
                            <ReserveFormGl>
                                <div>
                                    <button className="sendButtRs buttBanGreen" type="submit" form="profileFormGl">Continue</button>
                                </div>
                            </ReserveFormGl>
                        </article>
                    </section>
                </main>
                <FooterGl />
                <ModalsGl pathname={this.props.history.location.pathname} />
            </>
        );
    }
}
