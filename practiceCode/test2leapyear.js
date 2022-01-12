
// Calculate of leapYear ;

function Leap_Year(n){

var remainder = n % 4 ;

if (remainder === 0){

    return ('This is leapYear');

}

else{

    return ('This is not be leapYear');

}


}

var result = Leap_Year(2023);

console.log(result);