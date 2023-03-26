function oddAcurense(arr){

	let obj={};
	let arrlst=arr.toLowerCase().split(' ');
	for (let arrlstElement of arrlst) {
		obj[arrlstElement] = 0
	}
	for (let el1 of arrlst) {
		if (obj.hasOwnProperty(el1)) {
			obj[el1]++;
		}
	}
	let entries = Object.entries(obj);
	let entr = Object.entries(obj);
	entr.sort(function (a, b) {
		if (a[1] > b[1]) {
			return -1;
		}
		if (a[1] < b[1]) {
			return 1;
		}
		return 0;
	});

	let a=entr.filter(function ([key,value]){
		return value%2!==0;
	});


	let results=[];
	for (let [key,value] of entr) {
		if(value%2!==0){
			results.push(key)
		}
	}

	console.log(results.join(' '))
}
oddAcurense('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')