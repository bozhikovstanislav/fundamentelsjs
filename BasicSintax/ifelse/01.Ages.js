function solve(value) {

    let age = parseInt(value);
    let c = 0;
    if (0 <= age && age <= 2) {
        c = 1;
    } else if (3 <= age && age <= 13) {
        c = 2;
    } else if (14 <= age && age <= 19) {
        c = 3;
    } else if (20 <= age && age <= 65) {
        c = 4;
    } else if (age >= 66) {
        c = 5;
    }
    switch (c) {
        case 1:
            console.log("baby");
            break;
        case 2:
            console.log("child");
            break;
        case 3:
            console.log("teenager");
            break;
        case 4:
            console.log("adult");
            break;
        case 5:
            console.log("elder");
            break;
        default:
            console.log("out of bounds");

    }
}

solve("24")