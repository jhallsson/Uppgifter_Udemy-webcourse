// function KeySound(keyLetter, sound) {
//   this.keyLetter = keyLetter;
//   this.sound = sound;
// }

// var w = new KeySound("w", new Audio("sounds/tom-1.mp3"));
// var a = new KeySound("a", new Audio("sounds/tom-2.mp3"));
// var s = new KeySound("s", new Audio("sounds/tom-3.mp3"));
// var d = new KeySound("d", new Audio("sounds/tom-4.mp3"));
// var j = new KeySound("j", new Audio("sounds/kick-bass.mp3"));
// var k = new KeySound("k", new Audio("sounds/snare.mp3"));
// var l = new KeySound("l", new Audio("sounds/crash.mp3"));

var buttonArray = document.querySelectorAll(".drum");
var numberOfButtons = document.querySelectorAll(".drum").length;

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
for (var i = 0; i < numberOfButtons; i++) {
  buttonArray[i].addEventListener("click", function() { //lägg till click-lyssnare till alla i .drum
    var pressedDrum = this.innerHTML;
    playSound(pressedDrum);
  });
}
document.addEventListener("keydown", function(event) {
  var pressedKey = event.key;
  playSound(pressedKey);
});

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
