function reversString(str){

    var reverse ="";

    for ( var i = 0 ; i <str.length; i++){


        var char = str[i];

        reverse = char + reverse ;


    }return reverse; 


}

var reversArray = [ "M", "O","H","I","B"]

var result =  reversString(reversArray);

console.log(result);
