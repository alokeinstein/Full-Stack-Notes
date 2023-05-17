
const prompt = require('prompt-sync')({sigint:true})
let timesPlay = prompt(" how many times you want to play: ");


for (let i = 0; i < timesPlay; i++) {

  let game = "rps";

  let randomNum = game.charAt(Math.floor(Math.random() * game.length));
  let input = prompt("Choose only one  r  p  s: ");
  
if (randomNum === input) {
    console.log('draw');
  } else if ("r" === randomNum && input === "p") {
    console.log('win')
  } else if ("r" === randomNum && input === "s") {
    console.log('lose');
  } else if ("p" === randomNum && input === "r") {
    console.log('lose');
  } else if ("p" === randomNum && input === "s") {
    console.log('win')
  } else if ("s" === randomNum && input === "r") {
    console.log('win');
  } else if ("s" === randomNum && input === "p") {
    console.log('lose')
  } else {
    console.log("Please choose  r or p or s");
  }
}
  