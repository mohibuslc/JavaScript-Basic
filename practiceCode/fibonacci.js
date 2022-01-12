

// fibonacci series calculation 

function fibonacci (n){

    const fibo = [ 0, 1];

    for ( let i =2; i<=n ; i++){

        fibo[i]= fibo[i-1] + fibo[i-2];

        
    } return fibo ;


}

const result = fibonacci(10);

console.log(result);
