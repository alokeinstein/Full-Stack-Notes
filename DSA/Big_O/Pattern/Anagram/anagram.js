/* Make a function that takes two strings as an arguements and if these two strings consists same albhabet in 
in same frequency in any order it should return true*/

//MY WAY:  more fucking efficient
function anagram(str1,str2){

  if(str1.length!==str2.length){
      return false
  }

  let word1 = str1.split('').sort().join('')
  let word2 = str2.split('').sort().join('')

  if (word1===word2){
      return true
  }else{
      return false
  }
}

anagram("alok","kola")




//FREQUENCY COUNTER PATTERN


function anagram(str1, str2) {

  if(str1.length!==str2.length){return false}

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  let word1 = str1.split('')
  let word2 = str2.split('')


  for (let val of word1) {
    //The given line of code is using the logical OR operator (||) to check if frequencyCounter2[val] is truthy.
    // If it is, then it adds 1 to the value. If it is falsy, then it initializes the value to 1.
    frequencyCounter1[val] = (frequencyCounter1[val] + 1) || 0;
  }

  for (let val of word2) {
    frequencyCounter2[val] = (frequencyCounter2[val] + 1) || 0;
  }

  for (let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
        return false
    }
    if(frequencyCounter2[key]!==frequencyCounter1[key]){
        return false
    }
  }
 return true
}

anagram("alok ", "kola");
