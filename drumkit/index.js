var buttonArray = document.querySelectorAll(".drum");
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  buttonArray[i].addEventListener("click", function() { //lägg till click-lyssnare till alla i .drum
    var pressedDrum = this.innerHTML;
    playSound(pressedDrum);
    animateKey(pressedDrum);
  });
}
document.addEventListener("keydown", function(event) {
  var pressedKey = event.key;
  playSound(pressedKey);
  animateKey(pressedKey);
});

function playSound(drumKey) {
  switch (drumKey) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "k":
      new Audio("sounds/snare.mp3").play();
      break;
    case "l":
      new Audio("sounds/crash.mp3").play();
      break;
    default:
      console.log("Invalid Key.");
  }
}
function animateKey(key){
  var keyElement = document.querySelector("."+ key);
  keyElement.classList.add("pressed");
  console.log(keyElement);
  setTimeout(function(){
    keyElement.classList.remove("pressed");
  }, 100);
}
//MIN LÖSNING TILL HALVA PROBLEMET
//var pressedDrum = this.innerHTML;
// for (var n = 0; n < numberOfButtons; n++) {
//   if (pressedDrum === keyProperties.key[n]) {
//     keyProperties.sound[n].play();
//   }
//   console.log(this);
// }

// var pressedkey = this.innerHTML;
// for (var b = 0; b < numberOfButtons; b++) {
//   if (pressedkey === keyArray[b]) {
//     soundArray[b].play();
//   }
// }
