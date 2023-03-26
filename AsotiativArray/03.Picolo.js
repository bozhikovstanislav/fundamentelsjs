function carPicolo(arr){

	let parcinglots={};

	let counter=0;
	for (const parcinglotsKey of arr) {

		let car=parcinglotsKey.split(', ');

		switch (car[0]){
			case 'IN':
				parcinglots[car[1]]=counter;

				break;
			case 'OUT':
				delete parcinglots[car[1]]
				break;
			default:
				console.log("Parking Lot is Empty");
				break;
		}
		counter++;
	}

	let entr = Object.entries(parcinglots);
	entr.sort((a,b)=>a[0].localeCompare(b[0]))

	for (const el of entr) {

		console.log(el[0])
	}
}
carPicolo(
	['IN, CA2844AA',
	'IN, CA1234TA',
	'OUT, CA2844AA',
	'IN, CA9999TT',
	'IN, CA2866HI',
	'OUT, CA1234TA',
	'IN, CA2844AA',
	'OUT, CA2866HI',
	'IN, CA9876HH',
	'IN, CA2822UU'])
//carPicolo(
//	[''])