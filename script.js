//Selecting the container div
const container = document.querySelector('div');

//Dynamic grid creator

const input = document.querySelector('#input');//getting user input
const button = document.querySelector('#button');

userInput = 0; //Variable for storing user input

//Grid generator
function createGrid(){

    userInput = input.value//Putting the value inputted by user

    for(i=0; i < userInput; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}
//Changing grid Size
button.addEventListener('click', createGrid);

//Reset button
const resetBtn = document.querySelector('#reset');

//removing the entire div
const blank = document.querySelector('#input');
function clearDiv(){
    container.innerHTML = "";
    blank.value = 0;
}
 
resetBtn.addEventListener('click', clearDiv);//button for reset

//Random color Generator
const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getCharacters(index){
    return hexCharacters[index];
}

function randomColor(){
    let color = "#";

    for(i=0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * hexCharacters.length);
        color += getCharacters(randomNumber);
    }

    return color;
}

container.addEventListener('mouseover', event => {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = randomColor();
    }
});
