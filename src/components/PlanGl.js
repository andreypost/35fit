import React from 'react';
import { Link } from "react-router-dom";
import SetRateLineGl from './SetRateLineGl';

export const PlanGl = (props) => {
    const articulos = props.articulos
    return (
        <div className="blockOptimalGl shadow">
            <h6>PLAN</h6>
            <h3 className="darkblue">{articulos[0]}</h3>
            <div className="divLineHzGl"></div>
            <p>{articulos[1]}</p>
            <h2 className="lightgreen">{articulos[2]}<span className="ueGl">€</span></h2>
            <h3 className="darkblue">monthly</h3>
            <h6>{articulos[3]}</h6>
            <SetRateLineGl />
            <p className="soldGl"><span>{articulos[4]}</span>% SOLD</p>
            <Link to={props.enlazar} className="showPlanGl green">Details</Link>
        </div>
    );
}