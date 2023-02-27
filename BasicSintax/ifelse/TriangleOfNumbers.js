function solver(value) {

    var s = "";
    for (let i = 1; i <= value; i++) {

        for (let j = 0; j < i ; j++) {
          s+=i+" "
        }
        s+="\n";

    }
console.log(s)
}

solver(3)