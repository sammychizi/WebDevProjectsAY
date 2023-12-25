var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random number from 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Random number from 1 - 6

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelector("#dice1").setAttribute("src", randomImage1);
var image2 = document.querySelector("#dice2").setAttribute("src", randomImage2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(randomNumber2 == randomNumber1){
    document.querySelector("h1").innerHTML = "Draw!!";
}