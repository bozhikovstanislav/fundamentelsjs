function wordTracker(input) {
	let obj = {};
	let target = input.shift().split(' ');
	for (let el of target) {
		obj[el] = 0
	}
	for (let el1 of input) {
		if (obj.hasOwnProperty(el1)) {
			obj[el1]++;
		}

	}
	let entries = Object.entries(obj);
	let sorted = entries.sort((a, b) => b[1] - a[1]);
	for (let element of sorted) {

		let current = element.join(' - ')
		console.log(current);
	}
}

wordTracker([
	'this sentence',
	'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])