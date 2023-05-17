var randomChosenColor; //declaring outside so we can use it globally
var level= 0;
var userChosenColour;
var buttonColors = ["pink", "blue", "green", "yellow", "red"];
var randomNumber = Math.floor(Math.random() * 4) + 1;

randomChosenColor = buttonColors[randomNumber];
console.log(randomChosenColor);

var userClickedPattern = [];

var gamePattern = [];
gamePattern.push(randomChosenColor);




$(document).on("keypress", function () {
  
  //Chunk of code
  function chunkOfCode(x){

  $("#" + x).css("background-color", "#011F3F");
  $("#" + x).css("box-shadow", "0 0 20px white");

  let audio = new Audio("sounds/" + x + ".mp3");
  audio.play();

  setTimeout(function () {
    $("#" + x).css("background-color", x);
    $("#" + x).css("box-shadow", "0 0 20px #011F3F");
  }, 100);
}
chunkOfCode(randomChosenColor);


$(".btn").on("click", function (event) {
  $("h1").text("Level "+ ++level);
  
  userChosenColour = event.target.id; //tells which button is being pressed
  userClickedPattern.push(userChosenColour); //adding buttons names to the array
    console.log(userClickedPattern);

    chunkOfCode(userChosenColour);
    

    if (
      gamePattern[gamePattern.length - 1] !== userClickedPattern[userClickedPattern.length - 1]
    ) {
      let wrongAudio = new Audio("sounds/wrong.mp3");
      wrongAudio.play();

      $("body").css("background-color", "red");
      setTimeout(function () {
        $("body").css("background-color", "#011F3F");
      }, 100);
    }
  });
});
















/* 
$(document).on('keypress',function(){
    $('h1').text('Press any KEY to START')

   $("#"+randomChosenColor).css("background-color","#011F3F")
   $("#"+randomChosenColor).css( "box-shadow", "0 0 20px white")

    let audio = new Audio('sounds/'+randomChosenColor+'.mp3')
    audio.play()

    setTimeout(function(){
        $("#"+randomChosenColor).css("background-color",randomChosenColor)
        $("#"+randomChosenColor).css( "box-shadow", "0 0 20px #011F3F")
    },100)

}) */

//1. Use jQuery to select the button with the same id as the randomChosenColour
/* $(".btn").on('click',function(){

    $("#"+randomChosenColor).css("background-color","#011F3F")
   $("#"+randomChosenColor).css( "box-shadow", "0 0 20px white")

    let audio = new Audio('sounds/'+randomChosenColor+'.mp3')
    audio.play()

    setTimeout(function(){
        $("#"+randomChosenColor).css("background-color",randomChosenColor)
        $("#"+randomChosenColor).css( "box-shadow", "0 0 20px #011F3F")
    },100)
}) */
