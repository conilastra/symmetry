import { map, prop } from 'ramda';

const rawData = [
	{
		id: 'Disposición',
		color: '#74d4dc',
		data: 100,
		icon: 'extension',
		text: 'ejemplo de un texto'
	},
	{
		id: 'Expectativa',
		data: 90,
		color: '#71c2e0',
		icon: 'explore',
		text: 'acá dice una cosa'
	},
	{
		id: 'Racionalidad',
		data: 65,
		color: '#77aee6',
		icon: 'emoji_objects',
		text: 'acá dice otra cosa'
	},
	{
		id: 'Emocionalidad',
		data: 90,
		color: '#7e99ed',
		icon: 'favorite',
		text: 'holi holi bb'
	},
	{
		id: 'Atracción Física',
		data: 30,
		color: '#7e99ed',
		icon: 'whatshot',
		text: 'holi holi bb'
	}
];

const data = {
	datasets: [
		{
			data: map(prop('data'), rawData),
			backgroundColor: map(prop('color'), rawData)
		}
	],
	backgroundColor: '#ff6384',
	labels: map(prop('id'), rawData)
};

export { data, rawData };
