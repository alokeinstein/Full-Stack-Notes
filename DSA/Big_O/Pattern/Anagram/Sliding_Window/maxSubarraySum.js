/* Write a function called maxSubarraySum which accepts an array of integers and a number called n.The function should 
calculate the maximum sum of n consecutive elements in the array  */

/* WRONG SOLUTION */
// function maxSubarraySum(arr,n) {
//     let arr2 = []
//     let sum = 0
//     let j=0
//     for(let i=0; i<arr.length; i++){
//         sum = arr[i]+arr[i+1]
//         arr2.push(sum)
//     }
//     arr2.pop()
//     console.log(arr2)
//     arr2.sort((a, b) => a - b)
//     console.log(arr2)
//     return arr2[arr2.length-1]
// }

// maxSubarraySum([1,2,5,2,8,1,2],2)


/* Naive Solution */
function maxSubarraySum(arr, num) {
   if(arr.length<num) return null ; 
   let max = 0
   for(let i =0; i< arr.length-num+1; i++){
      let temp = 0
      for(let j=0; j<num; j++){
         temp += arr[i+j]

         if(temp>max){
            max=temp
         }   
      }
   }
   return max
   
}

maxSubarraySum([1,2,5,2,8,1,2],3)





//REFACTORED SOLUTION 
function maxSubarraySum(arr,num){
    if(arr.length<num) return null ; 
    let tempSum = 0
    let maxSum = 0
    for (let i=0; i<num; i++){
       maxSum += arr[i]
    }
    tempSum=maxSum
    for(let i=num; i< arr.length; i++){
       tempSum = tempSum - arr[i-num] + arr[i]
       maxSum = Math.max(maxSum,tempSum)//Updates maxSum if tempSum is larger than what it is in maxSum
    }
    return maxSum
 }
 maxSubarraySum([1,2,5,2,8,1,2],3)
 