function revealWords(word, template) {

	let w = word.split(', ');
	let result = '';
	let tmp1=template;
	for (let w_el of w) {

		let tmp = template.indexOf('*', w_el.length);
		if (tmp > 0) {
			result = tmp1.replace('*'.repeat(w_el.length), w_el);
			tmp1 = result;
		}
	}

	console.log(result)
}

// revealWords('great',
// 	'softuni is ***** place for learning new programming languages')
revealWords('great, learning',
	'softuni is ***** place for ******** new programming languages')