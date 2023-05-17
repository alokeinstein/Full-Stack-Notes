// function factorial(num){
//     if(num===1) return 1;
//     return num*factorial(num-1);
// }
// factorial(4)

//Using Loop
function factorial(num){
    let product=1;
    for(let i=num; i>0; i--){
       product *=i
    }
       return product
   }
   
   factorial(4)