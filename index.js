let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
function randomNumber1(){
    document.getElementById("hue").setAttribute("src",+ randomNumber1 + "images/dice6.png");
}