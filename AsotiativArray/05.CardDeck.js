function cardDeck(arr) {

	let players = {};

	for (const arrElement of arr) {

		let value = arrElement.split(': ');
		let playerName = value[0];

		let values = value[1].split(', ');
		let corectedValue=checkDuplicated(values)

		if (players.hasOwnProperty(playerName)) {
			let old_values = players[playerName];

			let newValues = [];
			for (const oldValue of old_values) {
				newValues.push(oldValue);
			}
			for (const value1 of corectedValue) {

				if (!newValues.includes(value1)) {
					newValues.push(value1)
				}

			}
			corectedValue = newValues;
		}
		let cards = corectedValue;

		players[playerName] = cards;
	}

	for (const playersKey in players) {

		console.log(`${playersKey}: ${cardcalculator(players[playersKey])}`)
	}


	function checkDuplicated(arr){

		let newarr = arr.filter(function (value, index) {

			let indexOf = arr.indexOf(value);
			return indexOf === index;
		});
		return newarr;

	}
	function cardcalculator(arr) {


		let valuecard = {
			'S': 4,
			'H': 3,
			'D': 2,
			'C': 1,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'6': 6,
			'7': 7,
			'8': 8,
			'9': 9,
			'10': 10,
			'J': 11,
			'Q': 12,
			'K': 13,
			'A': 14
		}

		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			if(arr[i].length===2){
				let arrq = arr[i].split('');
				let a = arrq[0];
				let b = arrq[1];
				let g = Number(valuecard[a]);
				let r = Number(valuecard[b]);
				sum += g * r;
			}else if(arr[i].length===3){

				let a = Number(arr[i].slice(0,-1));
				let b = arr[i][2].slice(-2);
				let g = Number(valuecard[a]);
				let r = Number(valuecard[b]);
				sum += g * r;
			}

		}

		return sum
	}
}

cardDeck([
	'Peter: 2C, 4H, 9H, AS, QS',
	'Tomas: 3H, 10S, JC, KD, 5S, 10S',
	'Andrea: QH, QC, QS, QD',
	'Tomas: 6H, 7S, KC, KD, 5S, 10C',
	'Andrea: QH, QC, JS, JD, JC',
	'Peter: JD, JD, JD, JD, JD, JD'
])
cardDeck([
	'Peter: 2C, 4H, 9H, AS, QS',
	'Tomas: 3H, 10S, JC, KD, 5S, 10S',
	'Andrea: QH, QC, QS, QD',
	'Tomas: 6H, 7S, KC, KD, 5S, 10C',
	'Andrea: QH, QC, JS, JD, JC',
	'Peter: JD, JD, JD, JD, JD, JD'
])
