function distinctArray(arr) {

	let newarr=arr.filter(function (value,index){

		let indexOf = arr.indexOf(value);
		return indexOf === index;
	})

	console.log(arr.join(' '));
	return newarr.join(' ');
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));