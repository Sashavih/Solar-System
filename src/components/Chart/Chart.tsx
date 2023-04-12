import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getDataChart } from '../../assets/data';
import './Chart.css';

export const Chart = (props: any) => {
	const [dataChart, setDataChart] = useState<any[]>([]);

	useEffect(() => {
		getDataChart().then((data) => {
			let sizePlane = data.map((planet => { return planet.meanRadius }));
			setDataChart(sizePlane)
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
				name: 'DATASET',
				data: dataChart
			}
		]
	};

	return (
		<div>
			{options ? <div className='chart-box'><HighchartsReact className='chart-box' highcharts={Highcharts} options={options} /> </div> : <div>Loader...</div>}
		</div>
	)
}
