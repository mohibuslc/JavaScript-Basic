
/**function details(num){

    if(num%2 === 0){ 

        console.log(num , ": is Even Number");

    }
    else {

        console.log(num*2 , " is odd number ");

    }
}





nums = [3,5,11,9];

for (var i = 0 ; i<nums.length ; i++){

    var num = nums[i];
    details (num);
  

} 

console.log('friendAge')
  

friend_Age =[12,3,11,9];

for (var i = 0; i<friend_Age.length; i++){

var num = friend_Age[i];

details(num);
}

function details_All ( nums){


    for ( var i = 0 ; i<nums.length ; i++ ){

        const num = nums[i];
        details(num)
    }
}

num = [ 11,22,15,10];
details_All(num);





var friendAge = [ 11,33,27,55];

details_All(friendAge);*/

// return use in function 


function details(num){

    if(num % 2 ===0){

        return num ; 
    }else {

        var result = num*2;
    }return result ;
}
function details_All(nums){

    var details_array = [];
    for( let i =0; i<nums.length ; i++){

        const num = nums[i];

        const evenify = details(num);
        details_array.push(evenify);
        
    } 
    return details_array ;
}

const array = [ 11,13,22,29,51,33];

const details_array = details_All(array);




console.log(details_array);
