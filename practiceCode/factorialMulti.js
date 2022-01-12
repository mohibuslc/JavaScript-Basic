

//  factorial calculate with multi way :

function factorial (n){

var fact = 1;

var i = 1;

if( n<0 || n>10 ) {

    return 'Hallow Sir !!! are you make input Negative Number In Machine';

}

else
{

    while(i <=n){ 
        
        var fact = fact *i;

        i++
    }
        return fact ;
}



}

var result = factorial(7);

console.log(result);
