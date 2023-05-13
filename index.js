// let randomNumber1 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
// function randomNumber1(){
//     document.getElementById("hue").setAttribute("src",+ randomNumber1 + "images/dice6.png");
// }

// Generate a random number between 1 and 6
// 

var randomNumber = Math.floor(Math.random()*6)+1;
var randomDiceImage = "player" +randomNumber + ".png";
var randomImageSource ="images/" + randomDiceImage;
var image1 = document.querySelectorAll("image")[0];
image1.setAttribute("src",randomImageSource);
