import React from 'react';

export const SetImgTextGl = (props) => {
	const articulos = props.articulos
	return (
        <div className="flex setImgTextBlGl">
			<div className={`setImgGl ${props.clase}`}>
				<img src={props.foto} alt="" className="shadow" />
			</div>
			<div className="setTextGl alignLf">
				<h2>{articulos[0]}</h2>
				<h3>{articulos[1]}</h3>
				<h5>{articulos[2]}</h5>
				{props.children}
			</div>
		</div>
	);
}

// export const SetImgTextGl = (props) => {
// 	const articulos = props.articulos;
// 	const renderOrder = (clase) => {
// 		return (
//             <div className="flex setImgTextBlGl">
// 				<div className={`setImgGl ${clase}`}>
// 					<img src={props.foto} alt="" className="shadow" />
// 				</div>
// 				<div className="setTextGl alignLf">
// 					<h3>{articulos.title_2 || articulos.title_3}</h3>
// 					<h2>{articulos.title_1}</h2>
// 					<h5>{articulos.text_1 || articulos.text_2 || articulos.text_3}</h5>
// 					<a href="/" className="white">Discover more</a>
// 				</div>
// 			</div>
// 		)
// 	}
//     return (
// 		<>{renderOrder(props.clase)}</>
//     );
// }
