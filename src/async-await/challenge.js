let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (URL) => {
	return new Promise((resolve, reject) => {
		
		const xhttp = new XMLHttpRequest();

		xhttp.open('GET', URL, true)
	
		xhttp.onreadystatechange = (() => {
			if (xhttp.readyState === 4) {

				(xhttp.status === 200)
					? resolve(JSON.parse(xhttp.responseText))
					: reject(new Error('Error', URL))
			}
		})
		xhttp.send();
	})
}

const anotherFunction = async (URL) => {
	try {
		const data = await fetchData(URL);
		const character = await fetchData(`${API}${data.results[11].id}`);
		const origin = await fetchData(character.origin.url);

		console.log(data.info.count);
		console.log(character.name);
		console.log(origin.dimension);

	} catch (error) {
		console.error(error);
	}
}

console.log('Before')
anotherFunction(API);
console.log('After')
