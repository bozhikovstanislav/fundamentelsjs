function towns(arr) {
	let counter = 0;
	let town = [];
	while (counter !== arr.length) {
		let p_input = arr[counter].split(' | ');
		let town_info = {
			'town': p_input[0],
			'latitude': `${Number(p_input[1]).toFixed(2)}`,
			'longitude': `${Number(p_input[2]).toFixed(2)}`
		}
		town.push(town_info)
		counter++;
	}
	for (let i = 0; i < town.length; i++) {
		console.log(town[i]);
	}

}

towns(['Sofia | 42.696552 | 23.32601',
	'Beijing | 39.913818 | 116.363625'])