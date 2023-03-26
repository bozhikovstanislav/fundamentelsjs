function MakeDictionary(arr) {

	let dictionary_arr = []
	let dictionary = {};
	for (let i = 0; i < arr.length; i++) {

		let itme = JSON.parse(arr[i]);

		let entrys = Object.entries(itme);

		for (let [key, value] of entrys) {
			dictionary.Term = key;
			dictionary.description = value;

			let filter = dictionary_arr.filter(x => x.Term === key);
			let index = dictionary_arr.findIndex(x => x.Term === key);

			if (filter.length > 0) {

				dictionary_arr[index].Term = key;
				dictionary_arr[index].description = value;

			} else {
				dictionary_arr.push(dictionary);
			}


			dictionary = {};
		}
	}
	dictionary_arr.sort(function (a, b) {
		if (a.Term < b.Term) {
			return -1;
		}
		if (a.Term > b.Term) {
			return 1;
		}
		return 0;
	});

	for (let i = 0; i < dictionary_arr.length; i++) {

		console.log(`Term: ${dictionary_arr[i].Term} => Definition: ${dictionary_arr[i].description}`)
	}
}

MakeDictionary([
	'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
	'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
	'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
	'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
	'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
	'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
