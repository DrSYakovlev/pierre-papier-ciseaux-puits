//Declare variables:
let reply = ['rock', 'paper','scissors','well']; //All possible moves by pc
let currentReply; //Randomly selected reply by pc for the current move
let count = 0; //Number of played rounds
let number; //Number of rounds in a game (required, selected from 3, 5 and 10)
//count of won, lost and draw rounds
let won = 0;
let lost = 0;
let draw = 0;
//Declare constants for reply hand gestures (weapons):
const replyRock = `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M252.4 103.8l27 48c2.8 5 8.2 8.2 13.9 8.2l53.3 0c5.8 0 11.1-3.1 13.9-8.2l27-48c2.7-4.9 2.7-10.8 0-15.7l-27-48c-2.8-5-8.2-8.2-13.9-8.2H293.4c-5.8 0-11.1 3.1-13.9 8.2l-27 48c-2.7 4.9-2.7 10.8 0 15.7zM68.3 87C43.1 61.8 0 79.7 0 115.3V432c0 44.2 35.8 80 80 80H396.7c35.6 0 53.5-43.1 28.3-68.3L68.3 87zM504.2 403.6c4.9 2.7 10.8 2.7 15.7 0l48-27c5-2.8 8.2-8.2 8.2-13.9V309.4c0-5.8-3.1-11.1-8.2-13.9l-48-27c-4.9-2.7-10.8-2.7-15.7 0l-48 27c-5 2.8-8.2 8.2-8.2 13.9v53.3c0 5.8 3.1 11.1 8.2 13.9l48 27zM192 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;

const replyPaper = `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`;

const replyScissors = `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`;

const replyWell = `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="36 " viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6L414.9 8.8C397.8 13.4 387.7 31 392.3 48l24.5 91.4L308.5 167.5l-6.3-18.1C297.7 136.6 285.6 128 272 128s-25.7 8.6-30.2 21.4l-13.6 39L96 222.6V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H406.7L340 257.5l-62.2 16.1L305.3 352H238.7L265 277l-74.6 19.3L137.3 448H96V288.8l337.4-87.5 25.2 94c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98L528.3 61.3zM205.1 448l11.2-32H327.7l11.2 32H205.1z"/></svg>`;

//Setting up event listeners:
document.getElementById('rock').addEventListener('click', myRock); //Actions when you play Rock.
document.getElementById('paper').addEventListener('click', myPaper); //Actions when you play Paper.
document.getElementById('scissors').addEventListener('click', myScissors); //Actions when you play Scissors.
document.getElementById('well').addEventListener('click', myWell); //Actions when you play Well.

//calling myCount function (updating score):
document.getElementById('rock').addEventListener('click', myCount);
document.getElementById('paper').addEventListener('click', myCount);
document.getElementById('scissors').addEventListener('click', myCount);
document.getElementById('well').addEventListener('click', myCount);

//Restart:
document.getElementById('repeat').addEventListener('click', finishedReload);

//Declare function: selecting game number (integer)
function gameNumber () {
    number = document.getElementById('game-length').value;
    document.getElementById('game-length').disabled = true; //Disable list after use
    number = parseInt(number);    
}

//Declare function: remove the "well" weapon
function removeWell() {
    document.getElementById('well').remove();
    reply = ['rock', 'paper','scissors']; //update reply variable
    document.getElementById('remove-well').remove(); //remove Remove button
}

//Declare function: played Rock. All 'weapon' functions have the same structure. Score update is based on the if/else structure
function myRock() { 
    currentReply = reply[(Math.floor(Math.random() * reply.length))]; //calculate random move by pc
    const node = document.createElement('h5'); //create element hosting current (live) results
    if (currentReply === 'rock') {
        document.getElementById('reply1').innerHTML = replyRock; //generate icon according to the pc move
        const textnode = document.createTextNode('Played: ROCK, Replied: ROCK. DRAW'); //create live result text node
        node.appendChild(textnode); //appent the lve result (textnode)
        document.getElementById('result').appendChild(node); //append score record of the last game
        draw++; //new score number
        document.getElementById('draw').innerHTML = draw; //update the score number field
    } else if (currentReply === 'scissors') {
        document.getElementById('reply1').innerHTML = replyScissors;
        const textnode = document.createTextNode('Played: ROCK, Replied: SCISSORS. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        won++;
        document.getElementById('won').innerHTML = won;
    } else if (currentReply === 'paper') {
        document.getElementById('reply1').innerHTML = replyPaper;
        const textnode = document.createTextNode('Played: ROCK, Replied: PAPER. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        lost++;
        document.getElementById('lost').innerHTML = lost;
    } else {
        document.getElementById('reply1').innerHTML = replyWell;
        const textnode = document.createTextNode('Played: ROCK, Replied: WELL. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);        
        lost++;
        document.getElementById('lost').innerHTML = lost;
    }    
}

//Declare function: played Paper
function myPaper() {    
    currentReply = reply[(Math.floor(Math.random() * reply.length))];
    const node = document.createElement('h5');
    if (currentReply === 'paper') {
        document.getElementById('reply1').innerHTML = replyPaper;
        const textnode = document.createTextNode('Played: PAPER, Replied: PAPER. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        draw++;
        document.getElementById('draw').innerHTML = draw;
    } else if (currentReply === 'scissors') {
        document.getElementById('reply1').innerHTML = replyScissors;
        const textnode = document.createTextNode('Played: PAPER, Replied: SCISSORS. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        lost++;
        document.getElementById('lost').innerHTML = lost;
    } else if (currentReply === 'rock') {
        document.getElementById('reply1').innerHTML = replyRock;
        const textnode = document.createTextNode('Played: PAPER, Replied: ROCK. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        won++;
        document.getElementById('won').innerHTML = won;
    } else {
        document.getElementById('reply1').innerHTML = replyWell;
        const textnode = document.createTextNode('Played: PAPER, Replied: WELL. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        won++;
        document.getElementById('won').innerHTML = won;
    }    
}

//Declare function: played Scissors
function myScissors() {    
    currentReply = reply[(Math.floor(Math.random() * reply.length))];    
    const node = document.createElement('h5');
    if (currentReply === 'scissors') {
        document.getElementById('reply1').innerHTML = replyScissors;
        const textnode = document.createTextNode('Played: SCISSORS, Replied: SCISSORS. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        draw++;
        document.getElementById('draw').innerHTML = draw;
    } else if (currentReply === 'rock') {
        document.getElementById('reply1').innerHTML = replyRock;
        const textnode = document.createTextNode('Played: SCISSORS, Replied: ROCK. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        lost++;
        document.getElementById('lost').innerHTML = lost;
    } else if (currentReply === 'paper') {
        document.getElementById('reply1').innerHTML = replyPaper;
        const textnode = document.createTextNode('Played: SCISSORS, Replied: PAPER. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        won++;
        document.getElementById('won').innerHTML = won;
    } else {
        document.getElementById('reply1').innerHTML = replyWell;
        const textnode = document.createTextNode('Played: SCISSORS, Replied: WELL. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);        
        lost++;
        document.getElementById('lost').innerHTML = lost;
    }    
}

//Declare function: played Well
function myWell() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];
    const node = document.createElement('h5');
    if (currentReply === 'well') {
        document.getElementById('reply1').innerHTML = replyWell;
        const textnode = document.createTextNode('Played WELL, Replied: WELL. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);        
        draw++;
        document.getElementById('draw').innerHTML = draw;
    } else if (currentReply === 'rock') {
        document.getElementById('reply1').innerHTML = replyRock;
        const textnode = document.createTextNode('Played WELL, Replied: ROCK. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);        
        won++;
        document.getElementById('won').innerHTML = won;
    } else if (currentReply === 'paper') {
        document.getElementById('reply1').innerHTML = replyPaper;
        const textnode = document.createTextNode('Played WELL, Replied: PAPER. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        lost++;
        document.getElementById('lost').innerHTML = lost;
    } else {
        document.getElementById('reply1').innerHTML = replyScissors;
        const textnode = document.createTextNode('Played WELL, Replied: SCISSORS. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);        
        won++;
        document.getElementById('won').innerHTML = won;
    }    
}

//Declare function updating count, score, reporting final score

//Update score:
function myCount() {
    if (number === undefined) {
        alert('Select number of rounds');
        location.reload();
        }    
    count++; //Update number of played rounds
    document.getElementById('rounds-played').innerHTML = count;
    //Reporting final result
    if (count === number) {        
        if (lost === won) {
            document.getElementById('total').innerHTML = 'DRAW';
            document.getElementById ('total').style.color = 'olive';
        } else if (lost > won) {
            document.getElementById('total').innerHTML = 'You LOST';
            document.getElementById ('total').style.color = 'brown';
        } else {
            document.getElementById('total').innerHTML = 'You WON!';
            document.getElementById ('total').style.color = 'darkblue';
        }    
    } else if (count > number) {
        location.reload();
    }
}

//Reloading page:
function finishedReload () {
    alert('Current score will be lost');
    location.reload();
}












