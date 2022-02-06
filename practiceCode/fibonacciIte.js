function fibonacciIta(num){

    var fibo = [0 ,1];

    for( var i=2 ; i<=num ; i++){


        var nextFibo = fibo[i-1] + fibo[i-2];

        fibo.push(nextFibo);

            
    }return fibo ;

}

//var result = fibonacciIta(10);

//console.log(result);


// recursive way calculate fibonacci series ; 


function fibonacci(n) {

    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

var result = fibonacci(10);

console.log(result)

// number adding function 

function add(numbers){


    var sum = 0;

    for (var i=0; i<numbers.length ; i++){

        if(numbers[i]<10){

            sum = sum + numbers ;

        }

        
    } return numbers ;
}

var result = add();
console.log(result);

