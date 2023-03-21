function checkPalindrom(arr){


	//convert numbers to string

	let aarString=arr.map(x=>String(x));

	for (let i = 0; i < aarString.length; i++) {

		console.log(checkPalindrom(aarString[i]));
	}


	function checkPalindrom(str){

		let strrevers=str.split('').reverse().join('');

		let flag=false;
		if(strrevers===str){
			flag=true;
		}
		return flag;
	}


}

checkPalindrom([123,323,421,121])