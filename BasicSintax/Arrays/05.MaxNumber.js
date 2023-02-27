function maxNumbers(arr){
	let result=[];
	let ismax=false;
	while (arr.length!==0){
		let element=arr.shift()
		for (let i = 0; i<arr.length; i++) {
			if(element===arr[i]){
				ismax=false;
				break;
			}else{
				ismax = element >= arr[i];
			}
		}
		if(ismax){
			result.push(element);
			ismax=false;
		}
		if(arr.length===0){
			result.push(element);
		}
	}
	printmaxNumber(result);
	function printmaxNumber(arr){
		let output='';
		for (let i = 0; i < arr.length; i++) {
			output+=`${arr[i]} `;
		}
		console.log(output);
	}
}
maxNumbers([1, 4, 3, 2])
maxNumbers([41, 41, 34, 20])
maxNumbers([27, 19, 42, 2, 13, 45, 48])