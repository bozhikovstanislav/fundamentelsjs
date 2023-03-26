function stringSubstring(word,str){
	let word_lower=word.toLowerCase();
	let sentanse=str.toLowerCase().split(' ');
	let flag=false;
	let counter=0;
	for (let str_word of sentanse) {
		let length = str_word.substring(word_lower).length;
		let word_check=str_word===word_lower;
		if(length>=0 && word_check){
			console.log(word_lower)
			flag=true;
			break;
		}
		else if(!flag && counter===sentanse.length-1){
			console.log(`${word_lower} not found!`);
		}
		counter++;
	}

}
stringSubstring('javascript',
	'programming JavaScript  is the best programming language')