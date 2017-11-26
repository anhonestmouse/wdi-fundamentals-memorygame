console.log("Up and running!");
var gamesPlayed = 0;
var gamesWon = 0;
var cards = [
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}

];
var cardsInPlay = [];
var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		++gamesWon;
		alert("You found a match! (" + cardsInPlay[0]+"s)\n\nGames Played: " + gamesPlayed + "\nGames Won: " + gamesWon);
	}else {
		alert("Sorry, try again.\n\nGames Played: " + gamesPlayed + "\nGames Won: " + gamesWon);
	}
};
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit + ".  Image: "+cards[cardId].cardImage);
	this.setAttribute("src", cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
};

var createBoard = function (){
	document.getElementById('game-board').innerHTML='';
	cardsInPlay = [];
	++gamesPlayed;
	for (var i = 0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	var resetButton = document.getElementsByTagName('button')[0];
	resetButton.addEventListener('click',createBoard);
};
createBoard();