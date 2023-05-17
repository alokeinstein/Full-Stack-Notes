/* Binary Search Pseudocode
This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
Create a pointer in the middle
If you find the value you want, return the index
If the value is too small, move the left pointer up
If the value is too large, move the right pointer down
If you never find the value, return -1 */

//My solution

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val) {
    if (arr[left] < val && arr[middle] > val) {
      left++;
      middle--;
      right = middle;
    } else if (arr[middle] < val && arr[right] > val) {
      right--;
      middle++;
      left = middle;
    }

    if (arr[left] === val) {
      return left;
    } else if (arr[right] === val) {
      return right;
    } else if (arr[middle] === val) {
      return middle;
    }
  }

  return arr[middle] === val ? middle : -1;
}
binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 12);



//Refactored Code
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val) {
    if(arr[middle]>val){
        right = middle -1
    }else{
        left = middle +1
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 12);



// Extra Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)





//this code is more time effiecient then any of the code above
function binarySearch(arr, n, k) {
  let left = 0;
  let right = n - 1;
  
  while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      
      if (arr[middle] === k) {
          return middle;
      } else if (arr[middle] < k) {
          left = middle + 1;
      } else {
          right = middle - 1;
      }
  }
  
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 7, 4);
