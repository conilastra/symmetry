import { map, prop } from 'ramda';

const rawData = [
	{
		id: 'Disposición',
		color: '#74d4dc',
		data: 90,
		hoverColor: '#38e5f5',
		icon: 'extension',
		meaning: '¿Cómo nos enfrentamos a nuevos vínculos?',
		style: {
			background: 'rgb(93,188,210)'
		},
		text:
			'Compartimos la noción de que los lazos se trabajan, que debe haber una intencionalidad en construir puentes y dimensiones. Aunque el miedo me nubló un poco, en general estoy muy dispuesta a poner de mi parte para avanzar juntos... espero que esto lo demuestre :)'
	},
	{
		id: 'Expectativas',
		data: 80,
		color: '#71c2e0',
		hoverColor: '#32c5fb',
		icon: 'explore',
		meaning: '¿Qué esperamos de nuevos vínculos?',
		style: {
			background: 'rgb(113,194,224)'
		},
		text:
			'A largo plazo, estoy muy de acuerdo con tu noción de lo que significa querer: el poder "descansar" en la otra persona, fortalecerse mutuamente, acompañarse, apoyarse. Sin embargo, yo necesito también la explosión bioquímica; aunque sea temporal, aunque se vaya a acabar, la quiero mientras dure (ver más detalles en Emocionalidad).'
	},
	{
		id: 'Racionalidad',
		data: 70,
		color: '#77aee6',
		hoverColor: '#389cff',
		icon: 'emoji_objects',
		meaning: '¿Qué importancia le damos a lo racional?',
		style: {
			background: 'rgb(119,174,230)'
		},
		text:
			'Aunque valoro profundamente las reflexiones e intentar posicionarme desde una visión crítica frente al mundo, para mí no todo tiene que ser cuestionable. A mí sí me gusta "dejarme llevar", aunque sea por un rato.'
	},
	{
		id: 'Emocionalidad',
		data: 80,
		color: '#7e99ed',
		hoverColor: '#4775ff',
		icon: 'favorite',
		meaning: '¿Qué importancia le damos a lo emocional?',
		style: {
			background: 'rgb(126,153,237)'
		},
		text:
			'En ambos existe la disposición a sentir, a formar lazos profundos y entendernos mutuamente. Entendemos la importancia de abordar las interacciones desde la responsabilidad afectiva y empatía.'
	},
	{
		id: 'Atracción Física',
		data: 30,
		color: '#7e85f4',
		hoverColor: '#525eff',
		icon: 'whatshot',
		meaning: '¿Qué importancia le damos a la atracción física?',
		style: {
			background: 'rgb(126,133,244)'
		},
		text:
			'Mi versión ideal del amor tiene 2 componentes: la atracción física y la emocional. Ambas son independientes e igual de importantes para poder alcanzar un peak. Cuando hablo de "construir en el aire" me refiero precisamente a intentar armar algo en base a una sola dimensión, sin contemplar que hay otra (o quitándole importancia a ella).'
	}
];

const data = {
	datasets: [
		{
			data: map(prop('data'), rawData),
			backgroundColor: map(prop('color'), rawData)
		}
	],
	labels: map(prop('id'), rawData)
};

export { data, rawData };
