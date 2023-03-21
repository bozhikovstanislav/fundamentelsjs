function oddEvenSum(a){


	let arrnumber=convertNumber(a);
	let evensum=evenSumNumber(arrnumber);
	let oddsum=oddSumDigits(arrnumber);
	console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`);


	function evenSumNumber(arr){

		let sumeven=0;
		for (let i = 0; i < arr.length; i++) {

			let number=Number(arr[i]);
			if(arr[i]%2===0) {
				sumeven+=number;
			}
		}

		return sumeven;
	}

	function oddSumDigits(arr){
		let sumodd=0;
		for (let i = 0; i < arr.length; i++) {

			let number=Number(arr[i]);
			if(arr[i]%2!==0) {
				sumodd+=number;
			}
		}

		return sumodd;
	}
	function convertNumber(aNumber){

		let a=String(aNumber);

		let arr_number=[];

		for (let i = 0; i < a.length; i++) {

			arr_number.push(a[i]);
		}

		return arr_number;

	}
}

oddEvenSum(1000435);