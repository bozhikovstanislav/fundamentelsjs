function equalsum(arr){

	let arrInNumber=arr.map(x=>Number(x));
	let flag=false;
	let index=0;
	for (let i = 0; i < arrInNumber.length; i++) {
		let a = rightism(arrInNumber, i);
		let b = leftsum(arrInNumber, i);
		if (a === b) {
			flag = true;
			index = i;
			console.log(index);
			flag=true;
			break;
		}
	}
	if(!flag){
		console.log('no');
	}
	function  rightism(arr,i){
		let arrleft=arr.slice(i+1);
		let sum=0;
		for (let j = 0; j < arrleft.length; j++) {
			sum+=arrleft[j];
		}
		return sum;
	}

	function leftsum(arr,i){
		let arrleft=arr.slice(0,i);
		let sum=0;
		for (let j = 0; j < arrleft.length; j++) {
			sum+=arrleft[j];
		}
		return sum;
	}

}

equalsum([1, 2, 3])
equalsum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);