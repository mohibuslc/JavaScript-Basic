

function megaFriend(array){

    var largeName = [];

    array.forEach(function (word){


        if(word.length > largeName.length){


            largeName = word ;


        }
    }) 
    
    return largeName;

}
var result = megaFriend(["mohib", "Rahman", " Kamal Hussian "]);

console.log(result);