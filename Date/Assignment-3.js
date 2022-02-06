


//  1. problem of killometer To Meter ;

function killometerTOmeter(km){


    var meter = km*1000 ;

    return meter;
}

var result = killometerTOmeter(3);
console.log('Meter=',result);

// function budgetCalculator  ;

function budgetCalculator(watch , phone , computer){

var product1 = watch * 50 ; 

var product2 = phone * 100 ; 

var product3 = computer * 500 ;

var total = product1 + product2 + product3;

return total ;

}
 

var total = budgetCalculator(5,6,7,);
console.log('Total Price the three Product=', total);


// megaFriend 

// function megeaFriend(array){

// var largeName="";

// array.forEach(function(word){

// if(word.length  > largeName.length){

//     largeName = word ;
//     }
// }) 
// return  largeName;

// }

function longest(str){
    // Split the string using regex
    //str = str.match(/[a-zA-Z0-9]+/gi);
    // Creating a empty string to store largest word
    let largest = "";
      
    // Creating a for...loop to iterate over the array
    for(let i = 0; i < str.length; i++){
      // If the i'th item is greater than largest string 
      // then overwrite the largest string with the i'th value
      if(str[i].length > largest.length){
        largest = str[i]
      }
    }
    return largest;
  }

//   var result = longest(["mohib", "mohammadMohibur","mohammadmohammadmohb"])

// console.log('Longest name in the array :',result);

// Best way doing find large word from Array ;

function friendList(array){

var largeName = [];

array.forEach(function(large){

    if(large.length>largeName.length){

        largeName = large ;

    }
}) 
return largeName ; 
}

var  result = friendList(["kamal", " Mohammad Mohibur Rahman"]);
console.log("longest name : " ,result);
