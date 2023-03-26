function campUsers(arr) {


	let companyEmployes = {};

	for (let el of arr) {
		let em_el = el.split(' -> ');
		let b = companyEmployes.hasOwnProperty(em_el[0]);
		let a = Object.values(companyEmployes).some(value => value === em_el[1]);
		if (b) {
			if (!a) {
				companyEmployes[em_el[0]] = companyEmployes[em_el[0]] + " " + em_el[1];
			}
		} else {
			companyEmployes[em_el[0]] = em_el[1];
		}
	}
	let entr = Object.entries(companyEmployes);
	entr.sort(function (a, b) {
		if (a[0] < b[0]) {
			return -1;
		}
		if (a[0] > b[0]) {
			return 1;
		}
		return 0;
	});

	printArray(entr)

	function printArray(arr) {
		for (let arrElement of arr) {
			let company = arrElement[0];
			console.log(company)
			let empl = arrElement[1].split(' ');
			for (const emplElement of empl) {

				console.log(' -- ' + `${emplElement}`)
			}

		}
	}
}


// campUsers([
// 	'SoftUni -> AA12345',
// 	'SoftUni -> AA12345',
// 	'Microsoft -> CC12345',
// 	'HP -> BB12345'
// ])
campUsers([
	'SoftUni -> AA12345',
	'SoftUni -> BB12345',
	'Microsoft -> CC12345',
	'HP -> BB12345'
])