import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Container, Stack } from "@mui/material";
import ReusableButton from "./components/ResultBtn/ResultBtn";
import Header from './components/header/Header';
import AboutPlanet from './components/AboutPlanet/AboutPlanet';
import { getData, } from './components/utils/utils';

function App() {

	const [planet, changePlanet] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		getData().then((data) => {
			let planetName = data.bodies.slice(1, 10).map((el => { return el.name }));
			console.log(planetName);
			setData(planetName)
		})
	}, []);
	const planets = data;

	return (
		<div className="App">
			<Header />
			<h2 className='title'>Learn Solar System</h2>
			<Container>
				<Stack
					spacing={6}
					direction="row">
					{planets.map((planet) => {
						return <ReusableButton
							buttonVariant="outlined"
							buttonSize="big"
							buttonText={planet}
							changePlanet={changePlanet} />
					})}
				</Stack>
			</Container>
			<AboutPlanet data={data} />

		</div>
	);
}

export default App;