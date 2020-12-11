
const suma = (num1, num2) => {
	return num1 + num2
}

const calcular = (num1, num2, callback) => {
	return callback(num1, num2)
}

console.log(calcular(6, 2, suma))

//* ------------------------------------------------------------------------------------------------- *//

const date = (callback) => {
	console.log(new Date())
	
	setTimeout(() => {
		let date = new Date()
		callback(date)
	}, 3000);
}

const printDate= (dateNow) => {
	console.log(dateNow)
}

date(printDate);

