function nxnMatrix(number){


	let n=Number(number);
	let arr = [];

	for (let i = 0; i < n; i++) {
		arr[i] = [];
		for (let j = 0; j < n; j++) {
			arr[i][j] = n;
		}
	}

	printnxn(arr);


	function printnxn(arr){

		for (let i = 0; i < arr.length; i++) {
			console.log(arr[i].join(' '))
		}

	}

}
nxnMatrix(5)