// Pseudocode
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count


//My solution
function stringSearch(long, short) {
    let count = 0;
    let num = 0;
  
    for (let i = 0; i < long.length - short.length + 1; i++) {
      for (let j = 0; j < short.length; j++) {
        if (long[i + j] !== short[j]) {
          num = 0;
          break;
        } else if (num === short.length - 1) {
          count++;
          num = 0;
          break;
        } else {
          num++;
        }
      }
    }
    return count;
  }
  
  console.log(stringSearch("omgzmomgggomg", "omg"));


  //Colt Steele
  function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")