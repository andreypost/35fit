import React from 'react';
import { NavigationGl } from './components/NavigationGl';
import ReserveLineRs from './components/ReserveLineRs';
import CalendarGl from './components/CalendarGl';
import { FooterGl } from './components/FooterGl';
import ModalsGl from "./components/ModalsGl";

export default class Reserve_Choose extends React.Component {
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
                        {'roundLinGlRs'}
                        {'roundDotGlRs'}
                        {'roundDotGlRs'}
                        {'lightgreen'}
                        {'lightgrey'}
                        {'lightgrey'}
                    </ReserveLineRs>
                    <article className="contCalenRs">
                        <CalendarGl />
                    </article>
                </main>
                <FooterGl />
                <ModalsGl pathname={this.props.history.location.pathname} />
            </>
        );
    }
}
