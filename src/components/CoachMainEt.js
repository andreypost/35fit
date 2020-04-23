import React from 'react';
import { Link } from "react-router-dom";
import article from '../articles';
import { GreenLineGl } from './GreenLineGl';
import line_1 from '../images/pattern/pattern_bg_3_2.png';
import line_2 from '../images/pattern/pattern_bg_1_3.png';
import photo_2 from '../images/add/add_5_2.png';
import photo_3 from '../images/add/add_5_3.png';
import photo_4 from '../images/add/add_5_4.png';
import { CommunityGl } from './CommunityGl';

export const CoachMainEt = (props) => {
    const articulos = props.articulos
    return (
        <main className="coachMainEt">
            <section>
                <div className="flex coachPersEt">
                    <div className="column alignLf alignStart justStart coachTextEt">
                        <Link to="/team" className="white">Back to Team</Link>
                        <hgroup>
                            <h1>{articulos[0]}</h1>
                            <h5>{articulos[1]}</h5>
                        </hgroup>
                        <h5>“Don't sell yourself short in life. Give yourself a challenge.”</h5>
                    </div>
                    <div className="flex coachImgEt">
                        <img src={props.foto} alt="" />
                    </div>
                </div>
                <div className="flex shadow aboutCoachEt relative">
                    {props.children}
                    <p className="seven alignLf relative">{articulos[2]}</p>
                    <div className="column seven">
                        <span className="relative"><i></i></span>
                        <h6 className="relative">Interested in:</h6>
                        <div className="alignLf">
                            <h5><span>–</span> Dancing</h5>
                            <h5><span>–</span> Extreme sport</h5>
                            <h5><span>–</span> Surfing</h5>
                            <h5><span>–</span> Traveling</h5>
                        </div>
                    </div>
                </div>
            </section>
            <GreenLineGl modelo={line_1} />
            <section className="coachPlayListEt">
                <h2 className="margBot alignLf">{articulos[3]}</h2>
                <div className="flex wrap">
                    <div className="selfStart coachPlayTextEt">
                        <p className="alignLf">{articulos[4]}</p>
                    </div>
                    <img src={photo_2} alt="" className="shadow" />
                    <img src={photo_3} alt="" className="shadow" />
                    <img src={photo_4} alt="" className="shadow" />
                </div>
            </section>
            <GreenLineGl modelo={line_2} />
            <CommunityGl articulos={[props.nombre, '', article[1].text_04]} />
        </main>
    )
}