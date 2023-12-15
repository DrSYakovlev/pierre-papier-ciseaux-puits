//Declare variables:
const reply = ['rock', 'paper','scissors','well'];
let currentReply;

//Setting up event listeners
document.getElementById('rock').addEventListener('click', myRock);
document.getElementById('paper').addEventListener('click', myPaper);
document.getElementById('scissors').addEventListener('click', myScissors);
document.getElementById('well').addEventListener('click', myWell);

//Declare functions
function myRock() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];;
    document.getElementById('reply1').innerHTML = currentReply;
    if (currentReply === 'rock') {
        document.getElementById('result1').innerHTML = 'DRAW';
    } else if (currentReply === 'scissors') {
        document.getElementById('result1').innerHTML = 'WON!';
    } else {
        document.getElementById('result1').innerHTML = 'lost';
    }
}


function myPaper() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];;
    document.getElementById('reply2').innerHTML = currentReply;
    if (currentReply === 'paper') {
        document.getElementById('result2').innerHTML = 'DRAW';
    } else if (currentReply === 'rock' || currentReply === 'well') {
        document.getElementById('result2').innerHTML = 'WON!';
    } else {
        document.getElementById('result2').innerHTML = 'lost';
    }
}

function myScissors() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];;
    document.getElementById('reply3').innerHTML = currentReply;
    if (currentReply === 'scissors') {
        document.getElementById('result3').innerHTML = 'DRAW';
    } else if (currentReply === 'paper') {
        document.getElementById('result3').innerHTML = 'WON!';
    } else {
        document.getElementById('result3').innerHTML = 'lost';
    }
}
//Under construction:
function myWell() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];;
    /*
    document.getElementById('reply3').innerHTML = currentReply;
    if (currentReply === 'scissors') {
        document.getElementById('result3').innerHTML = 'DRAW';
    } else if (currentReply === 'paper') {
        document.getElementById('result3').innerHTML = 'WON!';
    } else {
        document.getElementById('result3').innerHTML = 'lost';
    }*/
}
