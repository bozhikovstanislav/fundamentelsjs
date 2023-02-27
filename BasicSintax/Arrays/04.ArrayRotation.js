function arrayRotation(arr,n){

	let arr_result=[];
	let number=Number(n);

	while (number>0){
		let numbertoMove=arr.shift()
		arr.push(numbertoMove);
		number--;

	}
	printArrayRotation(arr)
	function printArrayRotation(arr){
		let output='';
		for (let i = 0; i < arr.length; i++) {
			output+=`${arr[i]} `;
		}
		console.log(output);

	}
}
arrayRotation([51, 47, 32, 61, 21], 2)