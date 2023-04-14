import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getDataChart } from '../../assets/data';
import './Chart.css';
import Button from '../Button/Button';

export const Chart = (props: any) => {
	const [minRadius, setMinRadius] = useState<string[]>([]);
	const [namePlanet, setNamePlanet] = useState<string[]>([]);

	useEffect(() => {
		getDataChart().then((data) => {
			let sizePlane = data.map((planet => { return planet.meanRadius }));
			let namePlane = data.map((planet => { return planet.englishName }));
			setMinRadius(sizePlane)
			setNamePlanet(namePlane);
			console.log(data);
		})
	}, []);

	const options = {
		chart: {
			type: 'spline'
		},
		yAxis: {
			title: {
				text: ''
			},
			min: -100
		},
		title: {
			text: 'График планет по диаметру.'
		},
		series: [
			{
				name: namePlanet,
				data: minRadius
			}
		]
	};

	return (
		<>

			<div>
				<div className="blockButton">
					<Button className="choose" type="button" title="Choose a comparison option"></Button>
					<Button className="compare" type="button" title="Compare"></Button>
				</div>
				{options ? <div className='chart-box'><HighchartsReact className='chart-box' highcharts={Highcharts} options={options} /> </div> : <div>Loader...</div>}
			</div>
		</>
	)
}
