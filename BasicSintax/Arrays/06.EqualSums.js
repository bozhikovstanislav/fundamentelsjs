function equalSums(arr){

	let arrnum=arr.map(x=>Number(x))
	let isindexexists=false;
	let index=0;
	for (let i = 0; i < arrnum.length; i++) {

		let leftsum=leftSum(arr,i);

		let rightsum=rightSum(arr,i);

		if(leftsum===rightsum){
			isindexexists=true;
			index=i;
			break;
		}else{
			isindexexists=false;
		}

		leftsum=0;
		rightsum=0;
	}
	if(isindexexists){
		console.log(index)
	}else{
		console.log('no');
	}

	function leftSum(arr,index){
		let sum=0;
		if(index<0){
			return sum;
		}else{
			return sum = arr.slice(0,arr[index]).reduce((a,b)=>a+b,0);
		}
	}
	function rightSum(arr,index){
		let sum=0;
		if(index-1===undefined){
			sum=0;
		}else{
			return sum = arr.slice(arr[index-1]).reduce((a,b)=>a+b,0);
		}
	}
}
//equalSums([1, 2, 3, 3]);
//equalSums([1, 2]);
//equalSums([1]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
