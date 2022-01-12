

function isleapyear (year){

    var remainder = year % 4 ;

    if(remainder == 0 ){

        return true ;
    }
    else {

        return false ;

    }
}

var result = isleapyear(2022);

console.log(result);
