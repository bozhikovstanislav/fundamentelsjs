function movies(arr){
	let results=[];
	let movie={
		'name':'',
		'director':'',
		'date':''
	}
	for (let i = 0; i < arr.length; i++) {
		let arrAddMovies=arr[i].split(' ').filter(x=>x==='addMovie');
		if(arrAddMovies.length!==0){
			let arrmovie=arr[i].split('addMovie ')
			let movieName=arrmovie[1];
			movie.name=movieName;
			results.push(movie);
			movie={
				'name':'',
				'director':'',
				'date':''

			}

		}

		let arrDirector=arr[i].split(' ').filter(x=>x==='directedBy');
		if(arrDirector.length!==0){

			let split = arr[i].split(' directedBy ');
			let isexist=results.findIndex(e=>e.name===split[0]);

			if(isexist>=0){
				let splitElement = split[1];
				results[isexist].director= splitElement;
			}
		}
		let arrOnDate=arr[i].split(' ').filter(x=>x==='onDate');
		if(arrOnDate.length!==0){

			let result=arr[i].split(' onDate ');
			let isexist=results.findIndex(e=>e.name===result[0]);
			if(isexist>=0){
				let splitElement = result[1];
				results[isexist].date= splitElement;
			}
		}
	}


	let text=''
	for (let i = 0; i < results.length; i++) {
		if(results[i].director!=='' && results[i].date!==''){
			text+=JSON.stringify(results[i]);
		}
	}
	console.log(text)

}

