//sum of natural number
const prompt = require('prompt-sync')({sigint:true})

let sum=0;
let  n = prompt("enter the number ");
for (let i = 0; i<=n; i++){
    sum += i
   // console.log(i);
    //console.log(sum);//if input 4 then=0 1 3 6 10
}
console.log(sum);

