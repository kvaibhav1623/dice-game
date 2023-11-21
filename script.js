var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomeImageSrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomDiceImage);

var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomeImageSrc2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomDiceImage2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML = "DRAW";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins";  
}
