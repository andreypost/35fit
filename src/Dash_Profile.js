import React from 'react';
import { NavigationGl } from './components/NavigationGl';
import { FooterGl } from './components/FooterGl';
import ReserveFormGl from './components/ReserveFormGl';
import ModalsGl from './components/ModalsGl';

export default class Dash_Profile extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <header>
                    <NavigationGl />
                </header>
                <main>
                    <section className="dashGlPw flex alignStart">
                        <article className="sideLeftPw">
                            <nav className="alignLf">
                                <ul>
                                    <li><a href="dashftbook.html" className="lightgreen">Dashboard</a></li>
                                    <li><a href="dashclass.html" className="lightgreen">Classes</a></li>
                                    <li><a href="dashprogress.html" className="lightgreen">Progress</a></li>
                                    <li><a href="dashcontract.html" className="lightgreen">Contract</a></li>
                                    <li><a href="dashprofile.html">Profile</a></li>
                                </ul>
                            </nav>
                        </article>
                        <article className="sideRightPw">
                            <hgroup className="alignLf">
                                <h1 className="margBot margLft">Profile</h1>
                                <h5>As one of our main focus is save your time, please fill short information about you, so you can get wristband quicker and start measuring on our Milonizer</h5>
                            </hgroup>
                            <ReserveFormGl>
                                <div className="alignLf changeButtPw">
                                    <button className="buttBanGreen" type="submit" form="profileFormGl">Save changes</button>
                                </div>
                            </ReserveFormGl>
                                <form action="" id="passwordFormPw" className="column alignStart relative">
                                    <h4 className="darkblue">Password</h4>
                                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                                        <legend>Current password:</legend>
                                        <input className="inputFiedGl" placeholder="Type your current password" required="required" name="" />
                                    </fieldset>
                                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                                        <legend>New password:</legend>
                                        <input className="inputFiedGl" placeholder="Type a new one" required="required" name="" />
                                    </fieldset>
                                    <div className="alignLf textTipPw">
                                        <h6>Strong password</h6>
                                        <p>At least 8 characters. Lower-case letter, upper-case letter, number</p>
                                    </div>
                                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                                        <legend>Repeat new password:</legend>
                                        <input className="inputFiedGl" placeholder="Once again" required="required" name="" />
                                    </fieldset>
                                    <div className="alignLf changeButtPw">
                                        <button type="submit" form="passwordFormPw" className="buttBanGreen">Update password</button>
                                    </div>
                                </form>
                        </article>
                    </section>
                </main>
                <FooterGl />
                <ModalsGl pathname={this.props.history.location.pathname} />
            </>
        );
    }
}