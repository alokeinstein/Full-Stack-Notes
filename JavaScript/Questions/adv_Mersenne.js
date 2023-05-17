const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("print mersenne prime from 1 to ");
n = Number.parseInt(n);
let sum = 0;
let f

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      sum++;
    }
  }
  if (sum === 2) {
    f=i
    let equation = Math.pow(2, f) - 1;
    equation = Number.parseInt(equation)
    sum = 0;
    for (let count = 1; count < equation; count++) {
      if (equation % count === 0) {
        sum++;
      }
    }
  }
  if(sum===2){
    console.log(f)
  }
  sum=0
}
