function sorting(arr){

	let compareFn = (a, b) => (a > b ? 0: -1);
	let compareFnDesc = (a, b) => (a > b ? -1: 0);

	let sorted = [...arr].sort();
	let result_arr_asc=sorted.sort(compareFn);
	let result_arr_dsc=arr.sort(compareFnDesc);

	const middleIndex = Math.ceil(result_arr_dsc.length / 2);
	let result=[];
	for (let i = 0; i <middleIndex; i++) {
		let index_dsc=result_arr_dsc.indexOf(result_arr_asc[i]);
		result.push(result_arr_dsc[i]);
		result.push(result_arr_dsc[index_dsc]);

	}
	return console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31,2, 18, -94,1])