

function getArraySum (numbers){



    var sum = 0;

    for ( var i = 0; i<numbers.length ; i++){


        var elements = numbers[i];
        sum = sum + elements ;

        
    }return sum ;
}


var numbers = [22,44,88,99];

var result = getArraySum (numbers);

console.log(result );
