function passwordValidator(password) {



	let l=lengthCheck(password);
	let d=lettersDigits(password);
	let l2=atleast2Digits(password);



	if(l){
		console.log("Password must be between 6 and 10 characters");

	}if(d){
		console.log("Password must consist only of letters and digits");

	}if(l2){
		console.log("Password must have at least 2 digits");

	}else if(!l && !d && !l2){
		console.log("Password is valid")

	}

	function lengthCheck(pass) {

		let pasarr = pass.split('');

		//let result="Password must be between 6 and 10 characters";
        let flag=false;
		if (!(pasarr.length <= 10 && pasarr.length >= 6) || pasarr.length===0) {

					flag=true;
		}
		return flag;
	}

	function lettersDigits(pass) {

		let arrPass = pass.split('');

		//let result="Password must consist only of letters and digits";

		let flag=false;
		for (let i = 0; i < arrPass.length; i++) {


			let number = arrPass[i].charCodeAt(0);

			let b = number <= 90 && number >= 65;
			let b1 = number <= 122 && number >= 97;
			let b2 = number <= 57 && number >= 48;

			if (!(b || b1 || b2)) {
				flag=true;
			}
		}
		if(arrPass.length===0){
			flag=true;
		}
		return flag;
	}

	function atleast2Digits(pass) {

		let counter = 0;
		let arrPass = pass.split('');
		//let result="Password must have at least 2 digits";
		let flag=false;
		for (let i = 0; i <= arrPass.length; i++) {
			let number=String(arrPass[i]);
			let b = number.charCodeAt(0);
			if (b <= 57 && b >= 48) {
				counter++;
			}
		}
		if (counter < 2) {
		flag=true;
		}
		return flag;
	}
}
	//passwordValidator('logIn')
	//passwordValidator('MyPass123')
	passwordValidator('01')