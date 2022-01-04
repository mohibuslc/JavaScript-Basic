

function leapYear (year){

    var  factorial = year % 4;

    if ( factorial === 0 ){

        return ( ' This Year are Going To Leap Year ')
    }

    else {


        return ( ' This Year Are not going Leap Year ')
    }

    


}

var result = leapYear(2000);

    console.log( result);