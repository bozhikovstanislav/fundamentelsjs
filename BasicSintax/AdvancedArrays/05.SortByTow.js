function sortby2criteria(arr) {


	let arrofStrings = arr.sort(function (a, b) {

		if(b.length - a.length>0){
			return -1;
		}if(b.length - a.length===0){
			if(a.toLowerCase()<b.toLowerCase()){
				return -1;
			}
		}

	});
	console.log(arrofStrings.join('\n'))

}

//sortby2criteria(['alpha', 'beta', 'gamma'])
//sortby2criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortby2criteria(['test', 'Deny', 'omen', 'Default']);