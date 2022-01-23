var sName = ['kamal ', 'jamal', 'jamal', 'tina', 'tina', 'kamal','mohib' , 'mohib'];

var uniqueName = [];

for ( var i = 0; i<sName.length; i++){

    var elements = sName[i];

    var Index = uniqueName.indexOf(elements);

    if(Index==-1){


        uniqueName.push(elements);

    }
}
console.log(uniqueName)