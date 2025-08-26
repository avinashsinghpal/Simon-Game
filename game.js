let gamePattern = [];

let userClickedPattern = [];

let buttonColours= ["red","blue","green","yellow"]

var level=0;

let started = false;


function playSound(randomChosenColour) {
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

//function to generate random integers

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}  

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
// step 1
$(document).keypress(function(event) {
    if (!started) {
        nextSequence();
        started = true;
        $("h1").text("Level 0");
    }
});
// step 2
function nextSequence() {
    userClickedPattern = [];
    var randomNumber = getRandomInt(0,3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};
// step 3
$(".btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length - 1);
});
// step 4

function checkAnswer(currentIndex) {
  if (gamePattern[currentIndex] === userClickedPattern[currentIndex]) {
    // Correct so far
    if (userClickedPattern.length === gamePattern.length) {
      // User finished full sequence
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    // Wrong click
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// step 5

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}


