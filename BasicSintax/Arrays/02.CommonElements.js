function commonElements(arr1,arr2){

	let result='';
	for (let i = 0; i < arr1.length; i++) {

		result=arr1[i];
		for (let j = 0; j < arr2.length; j++) {
			if(arr1[i]===arr2[j]){
				printCommonElements(result);
			}
		}
	}
	function printCommonElements(result){

		console.log('\n'+`${result}`)

	}
}