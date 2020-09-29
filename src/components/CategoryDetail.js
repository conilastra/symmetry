import React, { useState, useEffect } from 'react';
import { find, propEq, prop } from 'ramda';

import { rawData } from '../data-provider';

const CategoryDetail = ({ selectedData }) => {
	const [ currentData, setCurrentData ] = useState(null);

	useEffect(
		() => {
			setCurrentData(find(propEq('id', selectedData))(rawData));
		},
		[ selectedData ]
	);

	return (
		<section className="container">
			{selectedData && (
				<div className="data-description" style={prop('style', currentData)}>
					<h2 className="data-description__title">
						<i className="data-description__icon material-icons">{prop('icon', currentData)}</i>
						<span className="data-description__title__text">{prop('id', currentData)}</span>
					</h2>
					<span className="data-description__disclaimer">({prop('meaning', currentData)})</span>
					<p className="data-description__text">{prop('text', currentData)}</p>
				</div>
			)}
		</section>
	);
};

export default CategoryDetail;
