//Declare variables:
const reply = ['rock', 'paper','scissors','well'];
let currentReply;
let count = 0;
let score = 0;

//Setting up event listeners
document.getElementById('rock').addEventListener('click', myRock);
document.getElementById('paper').addEventListener('click', myPaper);
document.getElementById('scissors').addEventListener('click', myScissors);
document.getElementById('well').addEventListener('click', myWell);
document.getElementById('rock').addEventListener('click', myCount);
document.getElementById('paper').addEventListener('click', myCount);
document.getElementById('scissors').addEventListener('click', myCount);
document.getElementById('well').addEventListener('click', myCount);
document.getElementById('repeat').addEventListener('click', finishedReload);

//Declare functions
function myRock() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];
    const node = document.createElement('h2');    
    if (currentReply === 'rock') {
        const textnode = document.createTextNode('Replied ROCK. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 0;        
    } else if (currentReply === 'scissors') {
        const textnode = document.createTextNode('Replied: SCISSORS. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 1;        
    } else if (currentReply === 'paper') {
        const textnode = document.createTextNode('Replied: PAPER. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score - 1;
    } else {
        const textnode = document.createTextNode('Replied: WELL. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score - 1;        
    }
    document.getElementById('rock').remove();
}

function myPaper() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];
    const node = document.createElement('h2');    
    if (currentReply === 'paper') {
        const textnode = document.createTextNode('Replied PAPER. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 0;

    } else if (currentReply === 'scissors') {
        const textnode = document.createTextNode('Replied: SCISSORS. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score - 1;
    } else if (currentReply === 'rock') {
        const textnode = document.createTextNode('Replied: ROCK. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 1;
    } else {
        const textnode = document.createTextNode('Replied: WELL. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 1;
    }
    document.getElementById('paper').remove();    
}

function myScissors() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];
    const node = document.createElement('h2');    
    if (currentReply === 'scissors') {
        const textnode = document.createTextNode('Replied SCISSORS. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 0;
    } else if (currentReply === 'rock') {
        const textnode = document.createTextNode('Replied: ROCK. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score - 1;
    } else if (currentReply === 'paper') {
        const textnode = document.createTextNode('Replied: PAPER. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 1;
    } else {
        const textnode = document.createTextNode('Replied: WELL. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score - 1;
    }
    document.getElementById('scissors').remove();    
}

function myWell() {
    currentReply = reply[(Math.floor(Math.random() * reply.length))];
    const node = document.createElement('h2');    
    if (currentReply === 'well') {
        const textnode = document.createTextNode('Replied WELL. DRAW');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 0;
    } else if (currentReply === 'rock') {
        const textnode = document.createTextNode('Replied: ROCK. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 1;
    } else if (currentReply === 'paper') {
        const textnode = document.createTextNode('Replied: PAPER. You LOST!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score - 1;
    } else {
        const textnode = document.createTextNode('Replied: SCISSORS. You WON!');
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
        score = score + 1;
    }
    document.getElementById('well').remove();    
}

function myCount() {
    count++;    
    if (count === 3) {
        console.log('finished');        
        if (score < 0) {
            document.getElementById('total').innerHTML = 'You LOST';
            document.getElementById ('total').style.color = 'red';
        } else if (score == 0) {
            document.getElementById('total').innerHTML = 'DRAW';
        } else if (score > 0) {
            document.getElementById('total').innerHTML = 'You WON';
        }
    } else if (count > 3) {        
        location.reload();
    }
}

function finishedReload () {
    location.reload();
}
