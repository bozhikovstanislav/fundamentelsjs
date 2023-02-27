function solver(value) {

    let number = Number(value);

    let versions_two = number % 2;
    let versions_tree = number % 3;
    let versions_six = number % 6;
    let versions_seven = number % 7;
    let versions_ten = number % 10;


    let result = "";
    if (versions_two === 0) {
        result = 'A';
    }
    if (versions_tree === 0) {
        result = 'B';
    }
    if (versions_six === 0) {
        result = 'C';
    }
    if (versions_seven === 0) {
        result = 'D';
    }
    if (versions_ten === 0) {
        result = 'E';
    }

    switch (result) {
        case 'A':
            console.log(`The number is divisible by 2`);
            break;
        case 'B':
            console.log(`The number is divisible by 3`);
            break;
        case 'C':
            console.log(`The number is divisible by 6`);
            break;
        case 'D':
            console.log(`The number is divisible by 7`);
            break;
        case 'E':
            console.log(`The number is divisible by 10`);
            break;
        default:
            console.log("Not divisible");
    }

}

solver(12)