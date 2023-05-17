//The time complexity of first two solution is O(n^2)
function bubbleSort(arr) {
    let temp;
     for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            console.log(arr, arr[j],arr[j+1])
            //SWAP!!
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
          console.log("ONE PASS COMPLETE!!")
    }
    return arr
}

bubbleSort([10,14,29,30,14,18,37])




// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }


//The time complexity of this program is O(2n) which is O(n) which is the best case possible ,
// in this case we have to iterate just two times which is alot better than previous solution

  //noSwap:with this method we save a lot of unnesecary lteration if the array is almost sorted
  function bubbleSort(arr) {
    let temp
    var noSwap
     for(let i=arr.length; i>0; i--){
         noSwap = true
        for(let j=0; j<i-1; j++){
            console.log(arr, arr[j],arr[j+1])
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                //if the value of no swap is set to be false the iteration goes on
                noSwap=false
            }
        }
        //if no swaps = true and not set false it will break out of outer loop and wont iterate
          if(noSwap) break;
    }
    return arr
}

bubbleSort([8,1,2,3,4,5,6,7])