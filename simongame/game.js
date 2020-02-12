var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var playerPattern = [];
var gameInprogress = false;
var level = 0;
var currentLevel = 0;
var test=0;

$(".btn").click(function() {
  var clickedButton = $(this).attr("id");
  btnAnimate(clickedButton);
  btnSound(clickedButton);
  playerPattern.push(clickedButton);
  compareAnswer(playerPattern.length - 1);
});

$(document).keydown(function() {

  if (!gameInprogress) {
    nextSequense();
    gameInprogress = true;
  }
});

function startOver() {
  level = 0;
  gamePattern = [];
  gameInprogress = false;
}

function compareAnswer(currentLevel) {
  if (playerPattern[currentLevel] === gamePattern[currentLevel]) {
    if (playerPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequense();
      }, 800);
    }
  } else {
    console.log("wrong");
    gameOver();
  }
}

function nextSequense() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  level++;
  playerPattern = [];
  $("#level-title").text("Level " + level);
  gamePattern.push(randomChosenColor);
  btnAnimate(randomChosenColor);
  btnSound(randomChosenColor);
}

function gameOver() {
  new Audio("sounds/wrong.mp3").play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200)
  $("#level-title").text("Game Over! Press Any Key to Restart");
  startOver();

}

function btnAnimate(color) {
  $(".btn." + color).addClass("pressed");
  setTimeout(function() {
    $(".btn." + color).removeClass("pressed");
  }, 150);
}

function btnSound(color) {
  switch (color) {
    case "green":
      new Audio("sounds/green.mp3").play();
      break;
    case "red":
      new Audio("sounds/red.mp3").play();
      break;
    case "yellow":
      new Audio("sounds/yellow.mp3").play();
      break;
    case "blue":
      new Audio("sounds/blue.mp3").play();
      break;
    default:
      console.log("No Button");
  }
}
