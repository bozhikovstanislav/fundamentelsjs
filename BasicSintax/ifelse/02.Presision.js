function solve(number,precision) {

    if (precision > 15) {
        let number_parse = parseFloat(number.toFixed(15));
        console.log(number_parse)
    } else if(precision<=15 && precision>=0){
        let number_parse = parseFloat(number.toFixed(precision));
        console.log(number_parse)
    }
}

solve(3.1415926535897932384626433832795, 2)