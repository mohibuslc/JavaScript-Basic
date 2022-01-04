



function factorial(n) {

    var factorial = 1;

    
    if (n < 0 || n > 10) {



        console.log('Hallo Sir !!!! are you going Input Negative Number So its Result Occur is !!! ERROR!!');

    }

    else {

        for (var i = 1; i <= n; i++) {

            var factorial = factorial * i;



        } return factorial;


    }




}
var result = factorial(-1);


console.log('Factorial Result :', result);










