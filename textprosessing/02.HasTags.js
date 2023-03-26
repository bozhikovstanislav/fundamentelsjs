function hashtags(str) {
	let words = str.split(' ');
	for (let word of words) {
		let tmp = word.indexOf('#');
		if (tmp === 0
			&& onlyLettersAndSpaces(word.substring(1, word.length))) {
			if (word.substring(1, word.length).length > 0 && word.substring(1, word.length) !== '') {
				let words = word.substring(1, word.length);
				console.log(words)
			}
		}
	}
	console.log()

	function onlyLettersAndSpaces(str) {
		return /^[A-Za-z\s]*$/.test(str);
	}
}

hashtags('Nowadays everyone uses # to tag a #special word in #socialMedia')