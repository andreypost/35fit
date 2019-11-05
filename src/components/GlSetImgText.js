import React from 'react';
import { Link } from "react-router-dom";

export const GlSetImgText = (props) => {
	const article = props.articulos
	return (
        <div className="flex setImgTextBlGl">
			<div className={`setImgGl ${props.clase}`}>
				<img src={props.foto} alt="" className="shadow" />
			</div>
			<div className="setTextGl alignLf">
				<h2>{article[0]}</h2>
				<h3>{article[1]}</h3>
				<h5>{article[2]}</h5>
				<Link to={props.link} className="white">Discover more</Link>
			</div>
		</div>
	);
}

// export const SetImgTextGl = (props) => {
// 	const article = props.articulos;
// 	const renderOrder = (clase) => {
// 		return (
//             <div className="flex setImgTextBlGl">
// 				<div className={`setImgGl ${clase}`}>
// 					<img src={props.foto} alt="" className="shadow" />
// 				</div>
// 				<div className="setTextGl alignLf">
// 					<h3>{article.title_2 || article.title_3}</h3>
// 					<h2>{article.title_1}</h2>
// 					<h5>{article.text_1 || article.text_2 || article.text_3}</h5>
// 					<a href="/" className="white">Discover more</a>
// 				</div>
// 			</div>
// 		)
// 	}
//     return (
// 		<>{renderOrder(props.clase)}</>
//     );
// }
