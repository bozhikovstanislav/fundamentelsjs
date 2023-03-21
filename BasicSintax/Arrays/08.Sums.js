function sumUnique(arr,number) {


	let arrnumbers = arr.map(x => Number(x));
	let num = Number(number);
	let arums = [];
	let counter = 0;
	//const half = Math.ceil(arrnumbers.length / 2);
	//Calculating
	arums = arrnumbers.map(function (n) {
		for (const fElement of arrnumbers) {
			let f = n + fElement;
			if (f === num) {
				arums.push(n);
				arums.push(fElement);
			}
		}
		arrnumbers = arrnumbers.slice(counter + 1);
		if (arrnumbers.length === 0) {
			return arums;
		}
		counter++;
	})
	//printing
	for (const halfElement of arums) {
		if(halfElement!==undefined){
			let ha=halfElement.map(x=>String(x));
			const res = [];
			for (let i = 0; i < ha.length; i += 2) {
				const chunk = ha.slice(i, i + 2);
				res.push(chunk);
			}
			for (const re of res) {
				console.log(re.join(' '));
			}
		}
	}
}

sumUnique([1, 7, 6, 2, 19, 23], 8)
sumUnique([14, 20, 60, 13, 7, 19, 8], 27)