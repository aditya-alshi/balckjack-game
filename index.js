let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;

let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");


function renderGame(){
    let message;
    cardsEl.textContent = "Cards: "; 
    for(let e=0; e < cards.length; e++){
        cardsEl.textContent += cards[e] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum === 21){
        hasBlackjack = true;
        message= "You've got Blackjack!";
    }else if(sum <= 20){
        message= "Do you want to draw another card?";
    }else{
        message= "You are out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1){
        return 11;
    }else if(randomNumber > 10 ){
        return 10;
    }
    return randomNumber;
}



function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        cards.push(card);
        sum+= card;
        renderGame();
    }
}


