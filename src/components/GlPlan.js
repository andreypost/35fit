import React from 'react';
import { Link } from "react-router-dom";
import GlSetRateLine from './GlSetRateLine';

export const GlPlan = (props) => {
    const article = props.articulos
    return (
        <div className="blockOptimalGl shadow">
            <h6>PLAN</h6>
            <h3 className="darkblue">{article[0]}</h3>
            <div className="divLineHzGl"></div>
            <p>{article[1]}</p>
            <h2 className="lightgreen">{article[2]}<span className="ueGl">€</span></h2>
            <h3 className="darkblue">monthly</h3>
            <h6>{article[3]}</h6>
            <GlSetRateLine />
            <p className="soldGl"><span>{article[4]}</span>% SOLD</p>
            <Link to={props.enlazar} className="showPlanGl green">Details</Link>
        </div>
    );
}