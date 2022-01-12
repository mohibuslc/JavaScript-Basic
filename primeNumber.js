
  
function isPrime(n){

  
    for (i = 2 ; i<n-1; i++){
 
        if(n % i == 0){

            return ' is not a Prime Number ';

        }
       else{
        return ' Is the Prime Number ';
       }
    } 
    

}

var result = isPrime(120);

console.log(result);
