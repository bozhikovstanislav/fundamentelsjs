function partyList(arr) {
	let partylist = {};
	let counter = 0;
	let partyFlag = false;
	for (let guests of arr) {
		if (guests === 'PARTY') {
			counter++;
			partyFlag = true;
			continue;
		}
		if (partyFlag) {
			let g = Object.keys(partylist).filter(k => partylist[k] === guests);
			delete partylist[g[0]];
		} else if (!partyFlag) {
			partylist[counter] = guests;
		}
		counter++;
	}
	let entr = Object.entries(partylist);
	console.log(entr.length)
	entr.sort((a, b) => a[1].localeCompare(b[1]))
	for (const el of entr) {
		console.log(el[1])
	}
}

partyList(
	['7IK9Yo0h',
		'9NoBUajQ',
		'Ce8vwPmE',
		'SVQXQCbc',
		'tSzE5t0p',
		'PARTY',
		'9NoBUajQ',
		'Ce8vwPmE',
		'SVQXQCbc'
	])
partyList(
	['IK9Yo0h',
		'NoBUajQ',
		'4Ce8vwPmE',
		'5SVQXQCbc',
		'7IK9Yo0h',
		'9NoBUajQ',
		'4Ce8vwPmE',
		'5SVQXQCbc',
		'6tSzE5t0p',
		'PARTY',
		'9NoBUajQ',
		'4Ce8vwPmE',
		'5SVQXQCbc',
		'6tSzE5t0p'])