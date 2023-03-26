function minerTask(arr) {


	let resource = {};
	let counter = 0;
	let flag = false;
	let material = '';
	let quantity = 0;
	for (let arrElement of arr) {

		if (counter % 2 === 0) {
			material = '';
			material = arrElement;
		} else {
			quantity = 0;
			quantity = Number(arrElement);
			flag = true;
		}
		if (flag) {

			if (resource.hasOwnProperty(material)) {
				resource[material] += quantity;
			} else {
				resource[material] = quantity;
			}
			flag = false;
		}
		counter++;
	}
	for (const playersKey in resource) {

		console.log(`${playersKey} -> ${resource[playersKey]}`)
	}
}

// minerTask([
// 	'Gold',
// 	'155',
// 	'Silver',
// 	'10',
// 	'Copper',
// 	'17'
// ])
minerTask([
	'gold',
	'155',
	'silver',
	'10',
	'copper',
	'17',
	'gold',
	'15'
])