function WordTraker(arr) {
	let wordtracker = {};
	let wantedWords = arr.shift().split(' ');
	let count = 0;
	do {
		wordtracker[wantedWords[count]] = 0;
		count++;
	} while (count !== wantedWords.length)
	for (let i = 1; i < arr.length; i++) {
		if (wantedWords.hasOwnProperty(arr[i])) {
			wordtracker[arr[i]] += 1;
		}
	}
	let entr = Object.entries(wordtracker);
	entr.sort(function (a, b) {
		if (a[1] > b[1]) {
			return -1;
		}
		if (a[1] < b[1]) {
			return 1;
		}
		return 0;
	});
	for (let [Key, value] of entr) {
		console.log(`${Key} - ${value}`)
	}
}

WordTraker([
	'this sentence',
	'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
/*WordTraker([
	'is the',
	'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])*/
