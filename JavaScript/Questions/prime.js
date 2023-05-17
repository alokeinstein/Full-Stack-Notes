
const prompt = require('prompt-sync')({sigint:true})

/* let f = 0;
let j = prompt(" how many prime numbers you want?  ");

 for (let i = 2; f < j; i++)
    {
        for (let k = 2; k <= i; k++)
        {
            if (i % k == 0 && k < i)
            {
                break;
            }
            else if (i % k == 0)
            {
                console.log(i);
                f++;
            }
        }
    } */

    
let sum = 0
let z=0
let n = prompt('prime numbers between 1 and')
for (let i = 1; z < n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      sum++
    }
    }
  if (sum === 2) {
      console.log(i)
      z++
  }
    sum=0
  }




