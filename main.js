let addtodoButton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('input-field');

addtodoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph) 
    inputField.value= "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

     paragraph.addEventListener('dblclick', function () {
       todocontainer.removeChild(paragraph);
     });

})