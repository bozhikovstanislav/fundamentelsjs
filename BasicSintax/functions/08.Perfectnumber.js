function perfectNumber(n){

let number=Number(n);


		let divisores = [];

		let result = 1; //1 is a trivial divisor

		let i = 2;

		while (i * i <= number) { //until i <= sqrt(number)
			if (number % i === 0) {
				result += i;
				divisores.push(result)
				result += number / i;
				divisores.push(result)
			}
			i++;

			if (i * i === number) { //perfect square, sqrt(number) was added twice
				result -= i;

			}
		}

		console.log(divisores)
}
perfectNumber(6);