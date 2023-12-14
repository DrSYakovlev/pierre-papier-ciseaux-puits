//get random reply
let reply = ['rock', 'paper','scissors','well'];
let gameType;
let currentReply;

document.getElementById('rock').addEventListener("click", myRock);
document.getElementById('paper').addEventListener('click', myPaper);
document.getElementById('scissors').addEventListener('click', myScissors);
document.getElementById('well').addEventListener('click', myWell);

function randomReply() {
    console.log(reply[(Math.floor(Math.random() * reply.length))]);
}

function selection() {
    console.log(document.getElementById('best-of-three').checked);
    
}

function myRock() {
    console.log('You selected Rock');
    console.log(randomReply());

}

function myPaper() {
    console.log('You selected Paper');
}

function myScissors() {
    console.log('You selected Scissors');
}

function myWell() {
    console.log('You selected Well');
}

gameType = selection();
console.log(gameType);

if (gameType) {
    console.log('You are playing best-of-three game');
} else {
    console.log('You are playing a single-shot game');
}
