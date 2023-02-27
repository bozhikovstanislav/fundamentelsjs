function huntingGames(arr){

	let numberDays= Number(arr.shift());
	let numberPlayers=Number(arr.shift());
	let groupEnergy=Number(arr.shift());
	let waterPerson=Number(arr.shift());
	let foodPerson=Number(arr.shift());

	let curentfood=foodPerson*numberPlayers*numberDays;
	let water=waterPerson*numberPlayers*numberDays;

	let firstdayenergy=Number(arr.shift());

	let isenergyavailable=true;
	let arrsecondday=getEveryNth(arr, 2);
	let arraythirdday=getEveryNth(arr.slice(1), 3);
	groupEnergy=energylosses(firstdayenergy);
	for (let i = 0; i < arrsecondday.length; i++) {

		groupEnergy=energylosses(arrsecondday[i]);
		groupEnergy=boostwater(groupEnergy);
		water=dropWaterSuplay(water);

	}
	for (let i = 0; i <arraythirdday.length; i++) {

		groupEnergy=energylosses(arrsecondday[i]);
		curentfood=reduseFood(curentfood,numberPlayers);
		groupEnergy=foodenergyboost(groupEnergy);
	}
	if(groupEnergy<=0) {
		isenergyavailable=false;
	}

	if(isenergyavailable){
		printFailer(water,curentfood);
	}else{
		printSuccess(groupEnergy);
	}
	function getEveryNth(arr, nth) {
		return arr.filter((_element, index) => {
			return index % nth === 0;
		});
	}

	function printSuccess(energy){
		console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
	}
	function printFailer(food,water){
		console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
	}
	function energylosses(energy){
		let energylos=Number(energy);
		return groupEnergy-=energylos;
	}
	function boostwater(currentEnergy){
		let waterboost=currentEnergy*(1+0.05);
		return waterboost
	}
	function dropWaterSuplay(curentWater){
		let watersuply=curentWater*(1-0.3);
		return watersuply;
	}

	function foodenergyboost(curentenergy){
		let boostedenergy=curentenergy*(1+0.1);
		return boostedenergy;
	}

	function reduseFood(currentfood,numberPlayers){
		let resultfood=currentfood-currentfood/numberPlayers;
		return resultfood;
	}
}
huntingGames(["10","7","5035.5","11.3","7.2","942.3","500.57","520.68",
	"505.99","630.3","784.20","321.21","456.8","330"])