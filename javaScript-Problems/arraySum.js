var numbers = [22, 33, 55, 66, 99, 10, 44, 55, 21];

// var sum = 0;

// for ( var i= 0 ; i<numbers.length ; i++){


//     var elemant = numbers[i];

//     sum = sum + elemant;

// }

// console.log( 'Total Array =', sum );


function getArraySum(numbers) {

    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {

        var element = numbers[i];

        sum = sum + element;


    } return sum;


}

var numbers = [22, 33, 55, 66, 99, 10, 44, 55, 21,99];
var result = getArraySum(numbers);

console.log(' Array total sum =' , result);
