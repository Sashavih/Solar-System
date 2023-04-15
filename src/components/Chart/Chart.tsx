import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getDataChart } from '../utils/utils';
import './Chart.css';
import { Button } from '../Button/Button';

export const Chart = () => {
	const [minRadius, setMinRadius] = useState<string[]>([]);
	const [namePlanet, setNamePlanet] = useState<string[]>([]);
	const [orbitPlanet, setOrbit] = useState<string[]>([]);
	const [rotation, setRotation] = useState<string[]>([]);
	const [nameChart, setName] = useState<String>('График планет по звездному вращению')
	const [titleButton, setTitleButton] = useState("Choose a comparison option");
	const [dataChart, setDataChart] = useState<string[]>();
	const [show, setShow] = useState <Boolean>(false);


	useEffect(() => {
		getDataChart().then((data) => {
			let sizePlane = data.map((planet => { return planet.meanRadius }));
			let namePlane = data.map((planet => { return planet.englishName }));
			let sideralOrbitPlane = data.map((planet => { return planet.sideralOrbit }));
			let rotationPlane = data.map((planet => { return planet.sideralRotation }));

			setMinRadius(sizePlane)
			setNamePlanet(namePlane);
			setOrbit(sideralOrbitPlane);
			setDataChart(rotationPlane);
			setRotation(rotationPlane);
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
			text: nameChart
		},
		series: [
			{
				name: namePlanet,
				data: dataChart
			}
		]
	};

	const chooseOption = () => {
		setShow(!show);
	};

	const chooseRadius = () => {
		setTitleButton("Radius");
		setShow(!show);
	};

	const chooseOrbita = () => {
		setTitleButton("Orbita");
		setShow(!show);
	};

	const chooseRotation =() => {
		setTitleButton("Rotation");
		setShow(!show);
	};

	const compare = () => {
		switch(titleButton) {
			case 'Radius':
				setDataChart(minRadius);
				setName('График планет по радиусу');
				break;
			case 'Orbita':
				setDataChart(orbitPlanet);
				setName('График планет по диаметру орбиты');
				break;
			case 'Rotation':
				setDataChart(rotation);
				setName('График планет по звездному вращению');
				break;
			default:
				setDataChart(rotation);
				setName('График планет по звездному вращению');
		}
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
								<li className="itemList" onClick={ chooseRotation }>Rotation</li>
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
