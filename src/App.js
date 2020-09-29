import React, { useState, useEffect } from 'react';
import { find, propEq, prop } from 'ramda';
import { Polar } from 'react-chartjs-2';

import { data, rawData } from './data-provider';
import './App.css';

const App = () => {
	const [ selectedData, setSelectedData ] = useState(null);
	const options = {
		onClick: (e, element) => {
			if (element.length > 0) {
				const ind = element[0]._index;
				setSelectedData(data.labels[ind]);
			} else {
				setSelectedData(null);
			}
		}
	};

	return (
		<main>
			<Polar data={data} options={options} />
			<Description selectedData={selectedData} />
		</main>
	);
};

const Description = ({ selectedData }) => {
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
				<div className="data-description" style={{ backgroundColor: prop('color', currentData) }}>
					<h2 className="data-description__title">
						<i className="data-description__icon material-icons">{prop('icon', currentData)}</i>
						<span className="data-description__title__text">{prop('id', currentData)}</span>
					</h2>
					<p className="data-description__text">{prop('text', currentData)}</p>
				</div>
			)}
		</section>
	);
};

export default App;
