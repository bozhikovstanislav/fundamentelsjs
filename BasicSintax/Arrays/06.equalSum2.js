function equalsum(arr){


	let counter=0;
	let sumleft=0;
	let sumrigth=0;

	for (let arrElement of arr) {

		
		const sum = arr.reduce((b, a) => b + a, 0);
		console.log(sum); // 6
		console.log(arrElement)
		counter++;
	}
}

equalsum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);