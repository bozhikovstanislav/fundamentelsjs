function equalSums(arr){


	let arrnum=arr.map(x=>Number(x))

	let sumright = 0;
	let sumleft=0;
	let arrleft=[];
	let isindexexists=false;
	let index=0;
	for (let i = 0; i < arrnum.length; i++) {
		let right=arrnum.slice(arrnum[i]).map(x=>Number(x));
		for (let j = i; j < right.length; j++) {
			sumright += right[j];
		}
		arrleft.push(arrnum[i]);
		index=i;
		for (let j = 0; j < arrleft.length; j++) {
			sumleft+=arrleft[j];
		}
		if(sumleft===sumright){
			isindexexists=true;

		}
		sumright=0;
		sumleft=0;
	}

	if(isindexexists){
		console.log(index-1)
	}else{
		console.log('no');
	}

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
