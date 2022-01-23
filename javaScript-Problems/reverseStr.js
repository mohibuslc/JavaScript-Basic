
function reverseString(str){

    var reverse = "";

    for ( var i = 0 ; i <str.length ; i++){


        var char = str[i];

        reverse = char + reverse;

    }return reverse

}

var statment = " Hallow wel come ";

var forAlian = reverseString(statment);

console.log(forAlian);
