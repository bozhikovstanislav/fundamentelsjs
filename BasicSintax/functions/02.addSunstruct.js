function addSubstruct(a,b,c){

	let a1=Number(a);
	let b1=Number(b);
	let c1=Number(c);
	let result =substruct(sum(a1,b1,c1),c1);

	console.log(result)

	function sum(a1,b1,c1){

		return a1 + b1 ;
	}
	function substruct(s,c1){

		let resut=s-c1
		return resut;
	}

}

addSubstruct(32,6,10)