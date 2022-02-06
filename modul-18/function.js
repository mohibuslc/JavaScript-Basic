

function details(num){

if (num % 2 === 0){

    console.log(num,": is even number");


}else {

    console.log(num*2, ": is odd number");

}


}

function details_All(nums){

    for (let i=0 ; i<nums.length ; i++){

        const num = nums[i];
        details(num);


    }
}

nums = [12,24,13,10];

details_All(nums);


const friends = [19,17,13,11];

details_All(nums);

