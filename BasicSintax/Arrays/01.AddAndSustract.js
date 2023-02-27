function addAndSubstruct(arr){
	let newArr=[];
	let sumbeffor=0;
	let sumAfter=0;
	//calucations
	for (var i = 0; i < arr.length; i++) {
		sumbeffor+=arr[i];
		if(arr[i]%2===0){
			//even
			let items1 = arr[i]+i;
			newArr.push(items1);
		}else if(arr[i]%2!==0){
			//odd
			let items = arr[i]-i;
			newArr.push(items);
		}
		sumAfter+=newArr[i];
	}
	printAddSubstract(newArr,sumbeffor,sumAfter)

	function printAddSubstract(arr,sum1,sum2) {
		console.log(arr);
		console.log(sum1);
		console.log(sum2);
	}
}

addAndSubstruct([5, 15, 23, 56, 35])