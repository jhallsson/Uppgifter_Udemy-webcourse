//var header = document.querySelector("h1");
//header.innerHTML= "Refresh Me";

var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomNumber2 = Math.round(Math.random() * 5) + 1;
var header = document.querySelector("h1");
// header.innerHTML= "Refresh Me";
// if (header.innerHTML = "Refresh Me";) {
  diceRoll(randomNumber1, 1);
  diceRoll(randomNumber2, 2);
// }

function diceRoll(number, dice) {
  var number, n = 1; //randomNumber1
  var imgSrc = document.querySelector(".img" + dice);

  while (n <= 6) {
    if (number === n) {
      imgSrc.setAttribute("src", "Images/dice" + number + ".png");
    }
    n++;
  }
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#x1F3C6; Player 1 Won!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won! &#x1F3C6;";
} else {
  document.querySelector("h1").innerHTML = "&#x1F91C	It's A Tie! &#x1F91B"; //&#x1F6A9
}
