import React from 'react';
import { Link } from "react-router-dom";
import { NavigationGl } from './components/NavigationGl';
import ReserveLineRs from './components/ReserveLineRs';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Reserve_Identify extends React.Component {
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
                    <ReserveLineRs>
                        {'roundDotGlRs'}
                        {'roundLinGlRs'}
                        {'roundDotGlRs'}
                        {'lightgrey'}
                        {'lightgreen'}
                        {'lightgrey'}
                        <p>Identify</p>
                    </ReserveLineRs>
                    <section>
                        <h3>Don't we know You?</h3>
                        <form id="formCheckUserRs" className="flex" method="post" action="/en/clients/quick_reserve?reserve_start=2019-11-14T19%3A00%3A00%2B02%3A00">
                            <input type="hidden" name="client[reserve_start]" id="client_reserve_start" />
                            <div className="column">
                                <h4 className="darkblue">“Yes, it’s not my first time”</h4>
                                <div className="logoGlRs column">
                                    <fieldset className="fieldsetGl alignLf">
                                        <legend>E-mail address:</legend>
                                        <input className="inputFiedGl" placeholder="Enter e-mail address" required="required" type="text" name="client[email]" id="client_email" />
                                    </fieldset>
                                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                                        <legend>Password:</legend>
                                        <input className="inputFiedGl" placeholder="Enter password" required="required" type="password" name="client[password]" id="client_password" />
                                    </fieldset>
                                    <button type="submit" form="formCheckUserRs" className="logoSubGl">Login</button>
                                </div>
                            </div>
                            <div className="column justCtr shadow">
                                <h4 className="darkblue">“No, but it’s nice to meet you “</h4>
                                <Link to="/reserve_member" className="buttBanGreen">Sign up</Link>
                            </div>
                        </form>
                    </section>
                </main>
                <FooterGl />
                <ModalsGl pathname={this.props.history.location.pathname} />
            </>
        );
    }
}
