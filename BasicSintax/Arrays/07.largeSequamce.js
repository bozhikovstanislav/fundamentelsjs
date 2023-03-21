function largerSequence(arr){

	let arrNumbers=arr.map(x=>Number(x));

	let number=0;
	let count=[];
	let maxarry=[];
	let flag=false;
	for (let i = 0; i <arrNumbers.length-1; i++) {

		number=arrNumbers[i];
		for (let j = i; j < arrNumbers.length; j++) {

			if(number===arrNumbers[j]){
				maxarry.push(number);
				flag=true;

			}else{
				flag=false;
				break;
			}

		}

		if(maxarry.length>count.length){

			count=maxarry;
		}

		if(!flag){

			maxarry=[];


		}
	}
	if(maxarry.length===count.length){
		console.log(count.join(' '));
	}else{
		console.log(count.join(' '))
	}

}

// largerSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// largerSequence([1, 1, 1, 2, 3, 1, 3, 3])
largerSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])
// largerSequence([4, 4, 4, 4])