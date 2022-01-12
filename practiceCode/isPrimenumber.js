
// prime number calculate with recursive way 
function isPrimenumber (n){

        for ( var i = 2 ; i< n-1 ; i++){

                if(n % 2 == 0){

                        return ' it is not ';
                        
                }
                else {
                        return ' it is ';


                }


        }
}

var result = isPrimenumber(120);

console.log(result);
