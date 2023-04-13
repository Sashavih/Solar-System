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
	const [data, setData] = useState([]);
	const [dataPlanets, setDataPlanets] = useState([]);
	const [selectedObject, setSelectedObject] = useState([]);


	useEffect(() => {
		getData().then((data) => {
			const planets = data.bodies.slice(1, 10);
			setDataPlanets(planets);
		})
	}, []);

	const handleChangePlanet = (object) => {
		setSelectedObject(object);
	}

	return (
		<div className="App">
			<Header />
			<h2 className='title'>Learn Solar System</h2>
			<Container>
				<Stack
					spacing={6}
					direction="row">
					{dataPlanets.map((planet, index) => {
						return <ReusableButton
							planet={planet}
							key={index}
							buttonVariant="outlined"
							buttonSize="big"
							buttonText={planet.name}
							changePlanet={handleChangePlanet} />
					})};
				</Stack>
			</Container>
			{selectedObject && (<AboutPlanet key={selectedObject.id} {...selectedObject} />)}
			<Chart />
		</div >
	);
}

export default App;
