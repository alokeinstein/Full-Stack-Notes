const prompt = require('prompt-sync')({sigint:true})

let n = prompt("enter the number")
n = Number.parseInt(n)

let sum = 0
for (let i = 0; i <= n; i++) {
  if (n % i === 0) {
    sum++
  }
}
 if (sum === 2) {
  let x = Math.pow(2, n) - 1
  sum = 0
  for (let j = 0; j <= x; j++) {
    if (x % j === 0) {
      sum++
    }
  }
  if (sum === 2) {
    console.log(n + " is a mersenne prime")
  } else {
    console.log(n + " is a non mersene prime")
  }
  sum = 0
 }else {
    console.log(n + " is a non mersene prime")
  }





  /* 
  //Golus code
 sum=0
 let a = prompt('enter the number')
 let n
for (let i=1;i<=a;i++)
{
    if (a%i==0)
    {
        sum++;
    }
}
if (sum==2)
{
    for(let k=1;k++;)
    {
        n=Math.pow(2,k)-1;
        if(n==a)
        {
            console.log("it is mersenne prime ");
            break;
        }
        else if(n>a)
        {
           console.log("it is not a mersenne prime");
            break;
        }
    }
}
else{
console.log(" it is not mersenne number");
}
 */