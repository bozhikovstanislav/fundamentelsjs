function Inventory(arr){

	let results=[];
	let inventory={}

	for (let i = 0; i < arr.length; i++) {

		let itme=arr[i].split(' / ');
		inventory['Hero']=itme[0];
		inventory['level']=Number(itme[1]);
		inventory['Items']=itme[2]
		results.push(inventory)
		inventory={}
	}
	results.sort((a,b)=>a.level-b.level)

	for (let i = 0; i < results.length; i++) {

		console.log(`Hero: ${results[i].Hero}`)
		console.log(`level => ${results[i].level}`)
		console.log(`items => ${results[i].Items}`)

	}
}
Inventory([
	'Isacc / 25 / Apple, GravityGun',
	'Derek / 12 / BarrelVest, DestructionSword',
	'Hes / 1 / Desolator, Sentinel, Antara'
])