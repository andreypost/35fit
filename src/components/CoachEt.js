import React from 'react';
import { Link } from "react-router-dom";

export const CoachEt = (props) => {
    const articulos = props.articulos
    return (
        <Link to={props.link} >
            <div className="teamNameEt alignLf">
                <h4 className="lightgreen">{articulos[0]}</h4>
                <p>{articulos[1]}</p>
            </div>
            <div className="borBotGreyGl">
                <img src={props.foto} alt="" />
            </div>
        </Link>
    );
}