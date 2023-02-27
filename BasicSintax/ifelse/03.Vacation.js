function solver(n_people, type_group, day_ofWeek) {

    let price = 0;
    let student = false;
    let business = false;
    let regular = false;

    switch (type_group) {
        case "Students":
            if (day_ofWeek === "Friday") {
                price =parseFloat( '8.45');
            } else if (day_ofWeek === "Saturday") {
                price =parseFloat(' 9.80');
            } else if (day_ofWeek === "Sunday") {
                price =parseFloat('10.46');
            }
            student = true;
            break;
        case "Business":
            if (day_ofWeek === "Friday") {
                price =parseFloat( '10.90');
            } else if (day_ofWeek === "Saturday") {
                price =parseFloat( '15.60');
            } else if (day_ofWeek === "Sunday") {
                price =parseFloat( '16.00');
            }
            business = true;
            break;
        case "Regular":
            if (day_ofWeek === "Friday") {
                price =parseFloat('15.00');
            } else if (day_ofWeek === "Saturday") {
                price =parseFloat('20.00');
            } else if (day_ofWeek === "Sunday") {
                price =parseFloat('22.50');
            }
            regular = true;
            break;
    }

    let total = 0;
    if (student) {
        if (n_people >= 30 && n_people<100) {
            total = (n_people * price) * (1 - 0.15);
        }
    } else if (business) {
        if (n_people >= 100 ) {
            total = (n_people - 10) * price;
        }

    } else if (regular) {
        if (n_people >= 10 && n_people <= 20) {
            total = (n_people * price) * (1 - 0.05);
        } else if(n_people>0 && n_people<=10){
            total = (n_people * price);
        }else if(n_people>20){
            total = (n_people * price);
        }
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}

solver(30, "Students", "Sunday")
solver(40, "Regular", "Saturday")