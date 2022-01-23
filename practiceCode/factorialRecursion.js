
function factorial(num){


    var fact = 1;

    for( var i= 1; i<=num ; i++){

        fact = fact * i;

    }return fact ; 

}

var result = factorial(5);

console.log(' result', result );

// Recursive Way calculate Factorial ; 


function factorialRec(num){


    if( num == 1){

        return 1;

    }else{

        return num * factorialRec(num -1);

    }    
}

var result = factorialRec(10);

console.log('Recursive way calculate ', result);
