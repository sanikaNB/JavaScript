
// let num=((Math.random()*100)+1).toFixed(0);
// console.log(num);
// let prev="";
// let numOfGuesses=10;

// const form=document.querySelector('form');
// const result=document.querySelector('.result');
// const guesses=document.querySelector('.guesses');
// const lastResult=document.querySelector('.lastResult');
// const lowOrHi=document.querySelector('.lowOrHi')
// const playagain=document.querySelector('.button');

// form.addEventListener('submit',function(e){    
//     e.preventDefault()
//     let val='';   
//     val=parseInt(document.querySelector('#guessField').value);
//     console.log(val);

//     if(num!=val){
//         numOfGuesses=numOfGuesses-1;
//         prev=prev+" "+val;
//         guesses.innerHTML=`${prev}`  
//         lastResult.innerHTML=`${numOfGuesses}`;

//         if(numOfGuesses==0){
//             result.innerHTML='<p>Game Over!!!!</p>';
//             play();
//             guessField.disabled = true;
//         }else{
//             result.innerHTML='<p>try again</p>'

//             if(val>num){
//                 lowOrHi.innerHTML='<p>Too HIGH</p>'
//             }else{
//                 lowOrHi.innerHTML='<p>Too LOW</p>'
//             }
//         }
//     }else{
//         result.innerHTML='<p>you guessed it right</p>';
//         play();
//         guessField.disabled = true;
//     }
// });

// function play(){
//     playagain.removeAttribute("hidden");
//     // playagain.removeEventListener('click', resetGame); 
//     playagain.addEventListener('click', resetGame);
// }

// function resetGame(){
//     prev = "";
//     numOfGuesses = 10;
//     guesses.innerHTML = ""; 
//     lastResult.innerHTML = '10';
//     num = ((Math.random() * 100) + 1).toFixed(0);
//     console.log(num);
//     result.innerHTML = "";
//     lowOrHi.innerHTML = "";
//     playagain.setAttribute("hidden", "");
// };

const form = document.querySelector('form');
let num = ((Math.random() * 100) + 1).toFixed(0);
console.log(num);
const result = document.querySelector('.result');
let prev = "";
let numOfGuesses = 10;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const playagain = document.querySelector('.button');
const guessField = document.querySelector('#guessField');

// Attach event listener for form submission
form.addEventListener('submit', function(e) {    
    e.preventDefault();
    let val = parseInt(guessField.value);
    console.log(val);
    
    if (num != val) {
        numOfGuesses -= 1;
        prev += ` ${val}`;
        guesses.innerHTML = `${prev}`;
        lastResult.innerHTML = `${numOfGuesses}`;
        
        if (numOfGuesses == 0) {
            result.innerHTML = '<p>Game Over!!!!</p>';
            play();  // Calls play() to show "Play again" button
            guessField.disabled = true;
        } else {
            result.innerHTML = '<p>Try again</p>';
            if (val > num) {
                lowOrHi.innerHTML = '<p>Too HIGH</p>';
            } else {
                lowOrHi.innerHTML = '<p>Too LOW</p>';
            }
        }
    } else {
        result.innerHTML = '<p>You guessed it right!</p>';
        play();  // Calls play() to show "Play again" button
        guessField.disabled = true;
    }
});

// Function to handle game over or win scenario
function play() {
    playagain.removeAttribute("hidden");
    // **Fix 1**: Remove any existing event listeners to avoid duplicates
    playagain.removeEventListener('click', resetGame);  // <--- Highlighted Fix
    playagain.addEventListener('click', resetGame);
}

// Function to reset the game state
function resetGame() {
    prev = ""; // Clear previous guesses
    numOfGuesses = 10; // Reset number of guesses
    guesses.innerHTML = ""; // Clear the guess history display
    lastResult.innerHTML = '10'; // Reset the number of remaining guesses display
    num = ((Math.random() * 100) + 1).toFixed(0); // Generate a new random number
    console.log(num);
    result.innerHTML = ""; // Clear result message
    lowOrHi.innerHTML = ""; // Clear high/low message
    guessField.value = ""; // Clear the input field for the next game
    guessField.focus(); // **Fix 2**: Focus the input field for user convenience  // <--- Highlighted Fix
    playagain.setAttribute("hidden", ""); // Hide the "Play again" button
}


