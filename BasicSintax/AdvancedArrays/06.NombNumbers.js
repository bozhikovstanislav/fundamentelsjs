function bombNumbers(arr, numbers) {

	let num = Number(numbers[0]);
	let result = [];
	let sum = 0;

	let counter=0;
    let flag=false;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i]===num){
			flag=true;
			for (let j = 0; j < numbers[1]; j++) {
				counter++;
				result.pop();
			}
			continue;
		}
		result.push(arr[i])
		if(flag && counter!==numbers[1]*2){
			counter++;
			if(counter===numbers[1]*2){
				flag=false;
				counter=0;
			}
			result.pop();
		}
	}
	for (let i = 0; i < result.length; i++) {
		sum+=result[i];
	}
	console.log(sum);
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
//bombNumbers([1, 4, 4, 2, 8, 9,1] , [9, 3])
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
//bombNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1])
bombNumbers([8, 1, 8, 1, 1, 8, 1, 8, 0, 0, 9], [8, 2])