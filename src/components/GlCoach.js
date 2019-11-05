import React from 'react';
import { Link } from "react-router-dom";

export const GlCoach = (props) => {
    const article = props.articulos
    return (
        <Link to="/team_coach">
            <div className="teamNameEt alignLf">
                <h4 className="lightgreen">{article[0]}</h4>
                <p>{article[1]}</p>
            </div>
            <div className="borBotGreyGl">
                <img src={props.foto} alt="" />
            </div>
        </Link>
    );
}