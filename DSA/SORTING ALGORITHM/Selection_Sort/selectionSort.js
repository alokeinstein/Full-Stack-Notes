//My Solution: Naive
function selectionSort(arr){
    for(let i=0; i<arr.length; i++ ){
         var min= i
        for(let j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                var temp = arr[min]
                arr[min]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
selectionSort([12,25,16,4,45,1])


//the swapping is done outside the inner loop because when we finally find  to the minimum value after looping
//then only we do the swapping, by this method we can minimize the number of swapping performed.

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
