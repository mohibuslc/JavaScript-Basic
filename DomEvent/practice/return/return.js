function eveninfy(num) {

    if (num % 2 === 0) {

        return num
    }
    else {

        var evein = num * 2;

    } return evein;




}

function eveingy_All(nums) {

    const eveinfy_All = [];

    for (let i = 0; i < nums.length; i++) {

        const num = nums[i];

        const even = eveninfy(num);
        eveinfy_All.push(even);

    } return eveinfy_All;


}
const num_array = [12, 13, 11, 9, 17];

const eveinfy_All = eveingy_All(num_array);
console.log(eveinfy_All);