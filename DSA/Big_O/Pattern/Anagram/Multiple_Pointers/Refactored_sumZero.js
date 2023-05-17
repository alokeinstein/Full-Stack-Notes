//This code will only work when the numbers whose sum are zero will be at a certain index , its not like loop 
//that it will go to every number and check every possible condition. It will start at index 0 and last and
//come to the middle .
function sumZero(arr){
    let left =0;
    let right= arr.length-1

    while (left<right) {
        let sum = arr[left] + arr [right]

        if(sum===0){
            return [arr[left] , arr [right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
}

sumZero([-5,-4,-3-2-1,0,1,2,45,65])