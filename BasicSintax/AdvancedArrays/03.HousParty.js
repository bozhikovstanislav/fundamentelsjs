function housPartyList(arr){


	let housePartyList=[];

	for (let i = 0; i < arr.length; i++) {


		let comand=arr[i].split(" is ");

		if(comand[1]==="not going!"){

			let isInthelist=housePartyList.indexOf(comand[0]);

			if(isInthelist===-1){
				console.log(`${comand[0]} is not in the list!`);
			}else{

				housePartyList.splice(isInthelist,1);
			}

		}else if(comand[1]==="going!"){


			let isInthelist=housePartyList.indexOf(comand[0]);
			if(isInthelist>-1){
				console.log(`${comand[0]} is already in the list!`);
			}else{
				housePartyList.push(comand[0]);
			}

		}

	}
	return housePartyList.join('\n');
}

console.log(housPartyList(['Allie is going!',
	'George is going!',
	'John is not going!',
	'George is not going!']))
console.log(housPartyList(['Tom is going!',
	'Annie is going!',
	'Tom is going!',
	'Garry is going!',
	'Jerry is going!']))