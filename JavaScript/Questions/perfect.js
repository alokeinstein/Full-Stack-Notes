const prompt = require('prompt-sync')({sigint:true})

let f = 0
let n
let j = prompt(" how many perfect numbers you want?  ");

for (let i = 2; f < j; i++) {
  n = Math.pow(2, i) - 1;

  for (let k = 2; k <= n; k++) {
    if (n % k == 0 && k < n) {
      break;
    } else if (n % k == 0) {
      console.log((n * (n + 1)) / 2);
      f++;
    }
  }
}
