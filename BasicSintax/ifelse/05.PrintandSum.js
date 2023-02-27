function printsum(num1,num2){
	let end=num2;
	let tmp=num1;
	let sum=0;
	let numbers='';
	do{
		sum+=tmp;
		numbers+=tmp+ " ";
		tmp++;
		if(tmp===num2){
			numbers+=tmp+ " ";
			sum+=tmp;
		}
	}while (tmp!==end)
	console.log(numbers)
	console.log(`Sum: ${sum}`)
}
printsum(0,26)