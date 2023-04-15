import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getDataChart } from '../utils/utils';
import './Chart.css';
import {Button} from '../Button/Button';

export const Chart = (props: any) => {
	const [minRadius, setMinRadius] = useState<string[]>([]);
	const [namePlanet, setNamePlanet] = useState<string[]>([]);
	const [orbitPlanet, setOrbit] = useState<string[]>([]);

	const [titleButton, setTitleButton] = useState("Choose a comparison option");

	const[dataChart, setDataChart] = useState<string[]>([]);

	const [show, setShow] = useState <Boolean>(false);


	useEffect(() => {
		getDataChart().then((data) => {
			let sizePlane = data.map((planet => { return planet.meanRadius }));
			let namePlane = data.map((planet => { return planet.englishName }));
			let sideralOrbitPlane = data.map((planet => { return planet.sideralOrbit }));
			console.log(data);
			setMinRadius(sizePlane)
			setNamePlanet(namePlane);
			setOrbit(sideralOrbitPlane);
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
				data: dataChart
			}
		]
	};

	const chooseOption = () => {
		setShow(true);
	};

	const chooseRadius = () => {
		setTitleButton("Radius");
		setShow(false);
		
		console.log("data1");
	};

	const chooseOrbita = () => {
		setTitleButton("Orbita");
		setShow(false);
		
		console.log("data2");
	};

	// const optionsSelect = {
	// 	"Radius": {
	// 		select: minRadius,
			
	// 	},
	// 	"Option": {
	// 		select: orbitPlanet,
	// 	}
	// }

	const compare = () => {
		// setDataChart(optionsSelect.titleButton.select);
		//console.log(titleButton)
		
		titleButton === "Radius" ? setDataChart(minRadius) : setDataChart(orbitPlanet);
		
	};

	return (
		<>

			<div>
				<div className="blockButton">
					<div className="blockList">
						<Button handleClick={ chooseOption } className={"button choose"} type="button" title={titleButton}></Button>
						{
							show &&
							<ul className="list">
								<li className="itemList" onClick={ chooseRadius }>Radius</li>
								<li className="itemList" onClick={ chooseOrbita }>Orbita</li>
							</ul>
						}
					</div>
					<Button handleClick={ () => compare() } className="button" type="button" title="Compare"></Button>
				</div>
				{options ? <div className='chart-box'><HighchartsReact className='chart-box' highcharts={Highcharts} options={options} /> </div> : <div>Loader...</div>}
			</div>
		</>
	)
}
