
function durationFunction(duration){ 

var hostelCost = 0;

if ( duration <= 10){

    hostelCost = duration*100 ;
}
else if ( duration <= 20){

    var firstPart = 10*100 ; 
    var reminig = duration-10 ;
    var secondPart = reminig * 80 ;
    hostelCost = firstPart + secondPart ;

} else{

    var firstPart = 10 * 100 ;
    var secondPart = 10 * 80 ;
    var reminig = duration-20 ;
    var thiredPart = reminig * 50 ;
    hostelCost = firstPart + secondPart + thiredPart ;


   
    
}
 return hostelCost;

}

var result = durationFunction(19);

console.log(result)



