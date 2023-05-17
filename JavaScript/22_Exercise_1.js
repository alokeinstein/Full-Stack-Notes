
//Math.random gives a random no. between 0 and 1 up to 16 decimal places

const prompt = require('prompt-sync')({sigint:true})

let cn = Math.random()
let num= 100
cn = Math.round((cn * num) + 1)
let input
let chance = 0

let chanceLeft 

//taking input from the user untill he guesses the correct no
do {
  console.log('try again')
  input = prompt('guess the number: ')


  //if your guess is wrong and your input is greater than the correct no, this will be executed
  if(input!= cn && input>cn ){
    chance++

    //this will show that how many attempt is remaining
    chanceLeft = num-chance
    console.log('you have '+chanceLeft + ' chances left')
    console.log(input +' is greater than the random num')
  }

    //if your guess is wrong and input is smaller than the correct no. this will be executed
  else if(input!= cn && input<cn){
    chance++
    chanceLeft = num-chance
    console.log('you have '+chanceLeft + ' chances left')
    console.log(input +' is less than the random num')
  }
} while (input != cn)

//if the number is gussed this will show 
console.log('you have entered a correct number')
console.log('you have tried '+(chance+1)+' time.')