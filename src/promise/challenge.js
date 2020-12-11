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

fetchData(API)
	.then(data => {
		console.log(data.info.count)
		return fetchData(`${API}${data.results[10].id}`)
	})
	.then(data => {
		console.log(data.name)
		return fetchData(data.origin.url)
	})
	.then(data => {
		console.log(data.dimension)
	})
	.catch(err => console.error(err))