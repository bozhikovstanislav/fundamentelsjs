function mergeArray(arr1,arr2){
	let counter=0;
	let newarr=[];
	while (arr1.length>counter){

		if(counter%2===0){
			//even
			let items = Number(arr1[counter])+Number(arr2[counter]);
			newarr.push(items);
		}else{
			//odd
			let items1 = arr1[counter]+arr2[counter];
			newarr.push(items1);
		}
		counter++;
	}
    printMergeArray(newarr)

	function printMergeArray(arr){

		console.log(arr.join(' - ').toString());
	}
}
mergeArray(['5', '15', '23', '56', '35'],
	['17', '22', '87', '36', '11'])