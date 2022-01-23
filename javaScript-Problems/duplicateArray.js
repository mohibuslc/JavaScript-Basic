


// var numbers = [3, 2, 5, 4, 3, 6, 0, 7, 2, 5];

// var uniqeName = [];

// for (var i = 0; i < numbers.length; i++) {

//     var elemets = numbers[i];


//     var index = uniqeName.indexOf(elemets);

//     if (index == -1) {

//         uniqeName.push(elemets);
//     }

// }

// console.log(uniqeName);


var studentName = ['kamal' ,'jamal', 'tina', 'kamal', 'jamal', 'mohib', 'mohib']

var uniqueName = [];

for ( var i=0 ; i <studentName.length; i++){

var elements = studentName[i];

var Index = uniqueName.indexOf(elements);

if( Index == -1){

    uniqueName.push(elements);
}


}

console.log(uniqueName);

