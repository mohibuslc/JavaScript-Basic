

var element = document.getElementsByClassName('author');

for (var i = 0; i < element.length; i++) {

    var autors = element[i];
    autors.style.backgroundColor = 'lightblue';
    autors.style.border = '10px solid green';

}



var articlas = document.getElementById('first-class')

var newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Hallow Are you there ';

articlas.appendChild(newParagraph);




articlas.style.backgroundColor = 'yellow';
articlas.style.border = '5px solid red '

