/* Write a function called sumZero which takes a sorted array as an arguement.
The function should find the first pair of number whose sum is zero
return an array of pairs whose sum is zero and if there is no pair it should return undefined */

function sumZero(arr) {
  let count = 0;
 // let empty = [];//we dont need make this empty array 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        // empty.push(arr[i], arr[j]);//We can simply return like this 
        return [arr[i], arr[j]];
      } else {
        undefined;
      }
    }
  }
}

sumZero([-3,-2,-1,0,1,2,3]);

