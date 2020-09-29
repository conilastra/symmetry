import React, { useState } from 'react';
import { Polar } from 'react-chartjs-2';

import { data, rawData } from './data-provider';

import CategoryDetail from './components/CategoryDetail';
import Header from './components/Header';
import Intro from './components/Intro';

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
		},
		legend: {
			display: false,
			position: 'bottom'
		},
		scale: {
			ticks: {
				display: false
			},
			drawTicks: {
				display: false
			},
			gridLines: {
				color: '#ffffff36'
			}
		},
		maintainAspectRatio: false
	};

	return (
		<React.Fragment>
			<Header />
			<main>
				<Intro onClick={setSelectedData} selectedData={selectedData} />
				<section className="chart-container">
					<Polar data={data} options={options} />
				</section>
				<CategoryDetail selectedData={selectedData} />
			</main>
		</React.Fragment>
	);
};

export default App;
