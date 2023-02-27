function sequanceNumbers(values){
	let numbers=values.shift();
	let comands=values;
	for (let i = 0; i < comands.length; i++) {
		let comand=comands[i].split(' ');
		switch (comand[0]){
			case "Add":
				numbers=addValue(numbers,Number(comand[1]));
				break;
			case "Remove":
				numbers =removeValue(numbers,Number(comand[1]))
				console.log(numbers.join(' '));
				break;
			case "Replace": break;
			case "Collapse": break;
			case "Finish": break;
		}
	}
	function addValue(numbers, num){
		return numbers+ ' '+num;
	}
	function removeValue(numbers,num){
		let numArr=numbers.split(' ').map(x=>Number(x));
		let n=Number(num);
		let isexist=numArr.some(numArr=>numArr===num);
		let newarray=[];

		if(isexist){

			for (let i = 0; i < numArr.length; i++) {
				if(numArr[i]===num){

				}else{
					newarray.push(numArr[i])
				}
			}
			return newarray;
		}
	}
}

sequanceNumbers((["1 4 5 19", "Add 1", "Remove 4", "Finish"]))