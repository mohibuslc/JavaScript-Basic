function eveninfy (num){

    if ( num % 2 ===0 ){

        return num ;
    }

    else {

       var  result = num*2;


    } return result ;

}

//var result = eveninfy (num)

//console.log(result)

function eveninfy_All(nums){

    const eveninfy_arry =[];


    for (let i = 0 ; i<nums.length; i++){

        const num = nums[i];
        var result = eveninfy(num);
        eveninfy_arry.push (result);


    }

    return eveninfy_arry ;

}

var nums = [3 , 20, 11, 29  ,16];
var event_eveninfy = eveninfy_All(nums);
console.log(event_eveninfy);
