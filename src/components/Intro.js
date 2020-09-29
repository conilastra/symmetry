import React from 'react';
import { rawData } from '../data-provider';

const Intro = ({ onClick, selectedData }) => {
	return (
		<section className="intro">
			<h3 className="intro__title">
				¿Qué tan <span className="intro__title--logo">simétricas</span> son nuestras visiones?
			</h3>
			<p className="intro__text">
				Explora qué tan similares son nuestras nociones en torno a conceptos sobre cómo nos relacionamos.
				Ámbitos:
			</p>
			<section className="categories">
				{rawData.map((data) => (
					<div
						className="categories__icon"
						style={{
							backgroundColor: data.color,
							border: selectedData === data.id ? '2px solid white' : 'none'
						}}
						key={data.id}
					>
						<i className="material-icons" onClick={() => onClick(data.id)}>
							{data.icon}
						</i>
					</div>
				))}
			</section>
		</section>
	);
};

export default Intro;
