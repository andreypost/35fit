import React from 'react';
import { Link } from "react-router-dom";
import GlSwitchLung from './GlSwitchLung';

export const GlTopNav = (props) => {
  return (
    <section className="navSectionGl">
      <nav className="flex justBet">
        <div className="flex">
          <div>
            <Link to="/" className="logoGl">logo</Link>
          </div>
          <ul className="navLinksGl flex">
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/club">Club</Link></li>
            <li><Link to="/faq">Faq</Link></li>
          </ul>
        </div>
        <div className="flex">
          <GlSwitchLung />
          <div className="specialButtGl">
            <i className="iconGreenProfGl"></i>
          </div>
          <div className="navRightGl flex">
            <div className="buttProfGl">
              <div className="modButtPfGl flex relative">
                <i className="iconGreyProfGl"></i>
                <h6 className="userNameGl darkblue">Login</h6>
              </div>
              <div className="buttDeskPfGl flex">
                <i className="iconGreyProfGl"></i>
                <h6 className="userNameGl lightgreen">Login</h6>
                <i className="arrowDnGl"></i>
              </div>
            </div>
            <i id="loginGl" className="transparent" data-session="">Login</i>
            <Link to="/schedule" id="buyClass" className="green">Buy a class</Link>
          </div>
          <div id="navSwitchGl" className="relative">
            <i id="linesGl"></i>
            <i id="crossGl"></i>
          </div>
        </div>
      </nav>
    </section>
  )
}
