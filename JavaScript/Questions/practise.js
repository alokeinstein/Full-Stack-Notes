const prompt = require("prompt-sync")({ sigint: true });

/* //using switch case
let num = prompt("enter the num");
num= Number.parseInt(num)
switch (num) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("fuck of");
    break;
}
 */
/* 
let n = prompt('enter the number')
n= Number.parseInt(n)
if(n%1==0 && n%n==0 && n%==0){
   console.log('prime number')
}else{
    console.log('non prime num')
} */

let n = prompt("enter the number")
n = Number.parseInt(n)
let sum = 0
let x = [Math.pow(2, n) - 1]

for (let i = 1; i <= x; i++) {
  if (x % i == 0) {
    sum++
  }
  }
if (sum == 2) {
  console.log('mersenne prime')
} else {
  console.log("non mersenne prime")
}