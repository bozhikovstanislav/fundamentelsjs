function train(arr){
	let wagons_numbers=arr.shift().split(' ');
	let maxcapasity=Number(arr.shift());
	let count=0;
	while (count!==arr.length){
		let current = arr[count].split(' ');
		if(current.length>1){
			addWagon(wagons_numbers,current);
		}else if (current.length===1){
			let number=Number(current);
			for (let i = 0; i <wagons_numbers.length; i++) {
				let num=Number(wagons_numbers[i]);
				if(num+number<=maxcapasity) {
					let newpersons = num + number;
					wagons_numbers.splice(i, 1, newpersons);
					break;
				}
			}

		}
		count++;
	}

	return wagons_numbers.join(' ');
	function addWagon(arr,current) {
		switch (current[0]) {
			case 'Add':
				arr.push(current[1]);
				break;
		}
	}
}
console.log(train(['32 54 21 12 4 0 23',
	'75',
	'Add 10',
	'Add 0',
	'30',
	'10',
	'75']))