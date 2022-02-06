function megaFriend(array){

    var largeName = [];
    
array.forEach(function(word){

    if(word.length > largeName.length){

        largeName = word

       
    }
    
  
})

return largeName;
}

var result = megaFriend(["MohammadMohiburRahman", " Mohib","Jamal Ahmad Chowdhry"]);

console.log(result);
