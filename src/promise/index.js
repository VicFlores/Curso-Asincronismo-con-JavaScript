
const somethingWillHappen = () => {
	return new Promise((resolve, reject) => {
		
		if (true) {
			resolve('Muy buenas a todos, guapisimooooooos')
		} else {
			reject('No lo hiciste')
		}
	});
}

	somethingWillHappen()
		.then(res => console.log(res))
		.catch(err => console.log(err))

//* ------------------------------------------------------------------------------------------------- *//

const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve('It is true')
			}, 2000);
		} else {
			const error = new Error('Draios :(');
			reject(error)
		}
	});
}

somethingWillHappen2()
	.then(res => console.log(res))
	.catch(error => console.error(error))

	Promise.all([somethingWillHappen(), somethingWillHappen2()])
		.then(res => console.log('Array of results', res))
		.catch(err => console.error(err))