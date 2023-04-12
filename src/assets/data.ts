export const getDataChart = async () => {
	const URL = 'https://api.le-systeme-solaire.net/rest/bodies/'; //ссылка на api
	const response = await fetch(URL);
	const data = await response.json();
	console.log(data.bodies.slice(0, 9))
	return data.bodies.slice(0, 9);
}
