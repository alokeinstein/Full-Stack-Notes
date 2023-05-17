// function countOddValues(arr) {
//     let result=[]
//     function helper(helperInput) {
//         if(helperInput.length===0){
//             return;
//         }
//         if(helperInput[0]%2!==0){
//             result.push(helperInput[0])
//         }

//if not divisible by two then adding it to array and deleting it and then making a new array and repeating the process again
//         helper(helperInput.slice(1))
//     }
//     helper(arr)

//     return result
// }

// countOddValues([1,2,3,4,5])




/*PURE RECURSION*/
function countOddValues(arr){
    let newArr=[]
    if(arr.length===0){
        return newArr;
    }
    if(arr[0]%2!==0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(countOddValues(arr.slice(1)))
    return newArr;
}
countOddValues([1,2,3,4,5])