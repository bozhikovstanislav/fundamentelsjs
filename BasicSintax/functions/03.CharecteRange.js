function character(a,b){

 let codea=a.charCodeAt(0);
 let codeb=b.charCodeAt(0);

 let charresult=[]
	if(codea<codeb){
		for (let i = codea+1; i < codeb; i++) {

			charresult.push(String.fromCharCode(i));
		}
		console.log(charresult.join(' '));
	}else if(codea>codeb){
		for (let i = codeb+1; i < codea; i++) {

			charresult.push(String.fromCharCode(i));
		}
		console.log(charresult.join(' '));
	}

}

//character('a','d')
//character('#',':')
character('C','#')