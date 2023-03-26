function Employ(arr) {


	let persons = [];
// creating persons
	for (let i = 0; i < arr.length; i++) {

		let person = {
			'name': arr[i],
			'personal_Number': arr[i].length
		}
		persons.push(person)
	}

	for (let i = 0; i < persons.length; i++) {

		console.log(`Name: ${persons[i].name} -- Personal Number: ${persons[i].personal_Number}`)

	}
}

Employ([
	'Silas Butler',
	'Adnaan Buckley',
	'Juan Peterson',
	'Brendan Villarreal'
])