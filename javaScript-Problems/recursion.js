// recursion process apply on Factorial function ; 

// factorial number start counting from = 1; 

/**function factorial (num){

    var fact = 1;

    for ( var i= 1; i<= num ; i++){

        fact = fact * i ; 

    } return fact ;

}
var result = factorial(5);
console.log('Result', result);*/

// recursive way calculate : 

function factorialRecursive(num){

   if(num == 1){

    return 1;

   }else {

     return  num * factorialRecursive(num -1);

    }

    }
    var result = factorialRecursive(10);

    console.log('Result', result);

