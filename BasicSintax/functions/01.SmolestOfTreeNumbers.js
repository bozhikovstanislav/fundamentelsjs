function SmallestOfTree(a,b,c){

	if(a<b && a<c){
		return a;
	}else if(b<a && b<c){

		return b;
	}else if(c<a && c<b){
		return c;
	}else if(a===b && a===c){
		return a;
	}
}
console.log(SmallestOfTree(2,2,2))