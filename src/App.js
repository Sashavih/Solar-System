import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Container, Stack } from "@mui/material";
import ReusableButton from "./components/ResultBtn/ResultBtn";
import Header from './components/header/Header';
import AboutPlanet from './components/AboutPlanet/AboutPlanet';
import { getData } from './components/utils/utils';
import { Chart } from './components/Chart/Chart';

function App() {

	const [planet, changePlanet] = useState(1);
	const [dataPlanetsName, setDataPlanetsName] = useState([]);
	const [dataPlanets, setDataPlanets] = useState([]);
	const [dataChart, setDataChart] = useState([]);
	const [optionsChart, setOptionsChart] = useState(null);


	useEffect(() => {
		getData().then((data) => {
			const planets = data.bodies.slice(1, 10);
			let planetName = data.bodies.slice(1, 10).map((el => { return el.name }));
			setDataPlanetsName(planetName);
			setDataPlanets(planets);
			console.log(planets[0]);
		})
	}, []);
	/*useEffect(() => {
		getDataChart().then((dataChart) => {
			setDataChart(dataChart);
		})
	}, []);*/

	/*useEffect(() => {
		if (dataChart) {
			const optionsChart = getOptionsChart(dataChart);
			setOptionsChart(optionsChart);
		}
	}, [dataChart])*/
	const handleChangePlanet = (planets) =>
		planets.map((onePlanet) => (onePlanet));

	return (
		<div className="App">
			<Header />
			<h2 className='title'>Learn Solar System</h2>
			<Container>
				<Stack
					spacing={6}
					direction="row">
					{dataPlanetsName.map((planet) => {
						return <ReusableButton
							buttonVariant="outlined"
							buttonSize="big"
							buttonText={planet}
							changePlanet={handleChangePlanet} />
					})};
				</Stack>
			</Container>
			{dataPlanets.map((planet) => (<AboutPlanet key={planet.id} {...planet} />))}
			<Chart options={optionsChart} />
		</div >
	);
}

export default App;
