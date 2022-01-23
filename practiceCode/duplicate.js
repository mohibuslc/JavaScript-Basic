


// duplicate name can do remove from array ; 



/**
 * 
 * var studentName = ['jamal', 'karina', 'tina', 'frida', 'jamal',  'karina'];

var uniqueName = [];

for ( var i = 0 ; i<studentName.length; i++){


    var elements = studentName[i];

    var inbox = uniqueName.indexOf(elements);

    if(inbox == -1){

        uniqueName.push(elements);
    }
}

console.log(uniqueName);*/

var studentName = ['jamal', 'karina', 'tina', 'JagjithSing',  'frida', 'jamal',  'karina'];

var uniqueName = [...new Set(studentName)];

console.log(uniqueName);
