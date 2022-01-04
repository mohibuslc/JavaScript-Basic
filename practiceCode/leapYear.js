

// Checking about leapYear 2022 ? or not ?


function leapYear(year) {

    var remainder = year % 4;

    if (remainder == 0) {

        return (' This year are leap Year ');
    }

    else {

        return (' sorry !! This year are not leapYear ')
    }




}
var result = leapYear(2023);
console.log(result);
