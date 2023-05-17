/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false */


function sameFrequency(number1,number2) {

    let num1= number1.toString().split("")
    let num2= number2.toString().split("")

   if( num1.length!==num2.length ) return false
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of num1){
        frequencyCounter1[val] =(frequencyCounter1[val] + 1) || 0;
      }

    for(let val of num2){
        frequencyCounter2[val] = (frequencyCounter2[val] + 1) || 0;
    }

   for(let key in frequencyCounter1){
    //checking whether they have the same values for each corresponding key.
      if(!(frequencyCounter1[key]===frequencyCounter2[key])){
         return false
      }
   }
   return true;

    
}

sameFrequency(1882,2881)
