import React from 'react';
import { Link } from "react-router-dom";

export const BannerBottomGl = (props) => {
	const articulos = props.articulos
    return 	(
		<section className="bannerBottomGl relative">
			<article className="column shadow">
				<i className={props.clase[0]}>{articulos[0]}</i>
				{/* <h3 className={`darkblue ${props.clase[1]}`}>{articulos[1]}</h3> */}
				<h3 className={'darkblue ' + props.clase[1]}>{articulos[1]}</h3>
				<h4 className="darkblue">{articulos[2]}</h4>
				<h1>{articulos[3]}<span>{articulos[5]}€</span></h1>
				<h4 className="darkblue">{articulos[4]}</h4>
				<Link to="/reserve_choose" className="buttBanGreen">Register for trial</Link>
			</article>
		</section>
  );
}
