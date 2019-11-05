import React from 'react';
import { Link } from "react-router-dom";

export const GlBannerBottom = (props) => {
	const article = props.articulos
    return 	(
		<section className="bannerBottomGl relative">
			<article className="column shadow">
				<i className={props.clase[0]}>{article[0]}</i>
				<h3 className={`darkblue ${props.clase[1]}`}>{article[1]}</h3>
				<h4 className="darkblue">{article[2]}</h4>
				<h1>{article[3]}<span>{article[5]}€</span></h1>
				<h4 className="darkblue">{article[4]}</h4>
				<Link to="/schedule" className="buttBanGreen">Register for trial</Link>
			</article>
		</section>
  );
}
