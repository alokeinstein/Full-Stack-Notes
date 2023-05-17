/* Write a function called same which accepts two arrays, and returns true if one array is corresponding to 
square of second array. The frequency of the value must be the same. */

function same(arr1, arr2) {
    let count = 0;  // Initialize a counter to keep track of the number of matching elements
    arr1.sort();    // Sort the first array in ascending order
    arr2.sort();    // Sort the second array in ascending order
    
    for (let i = 0; i < arr2.length; i++) {  // Loop through each element of the second array
      // Check if the i-th element of the second array is either the square of the i-th element of the first array, or vice versa
      // If it is, increment the counter; otherwise, do nothing
      arr2[i] === arr1[i]**2 || arr1[i] === arr2[i]**2 ? count++ : count;
    }
    
    // Check if the number of matching elements is equal to the length of the first array
    // If it is, log true to the console; otherwise, log false
    count === arr1.length ? console.log(true) : console.log(false);
  }
  
  same([1,2,1],[1,4,1]);
  




//Colt steele solution:  this function is more efficient and scalable than the first one because its has O(n)
//time complexity and the first one has O(n logn) because of the `sort` method. 


function same(arr1, arr2){
    // Check if the arrays have different lengths
    if(arr1.length !== arr2.length){
        return false;
    }
    
    // Create empty objects to store frequency of each value in the arrays
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    // Loop through each element in arr1 and increment its frequency in frequencyCounter1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    
    // Loop through each element in arr2 and increment its frequency in frequencyCounter2
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    
    // Log the frequency counters to the console (for debugging purposes)
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    // Loop through each key in frequencyCounter1
    for(let key in frequencyCounter1){
        // Check if the square of the key exists in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            // If the square does not exist, the arrays cannot have the same contents, so return false
            return false
        }
        // Check if the frequency of the square in frequencyCounter2 is the same as the frequency of the original key in frequencyCounter1
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            // If the frequencies are not the same, the arrays cannot have the same contents, so return false
            return false
        }
    }
    
    // If the function has not returned false yet, the arrays must have the same contents (just in a different order), so return true
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])


