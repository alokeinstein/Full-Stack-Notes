/* Input:
N = 4
A[] = {1, 2, 3, 4}
Output:
1 3
 */


 let arr = [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16]
const arrMap = arr.map((index, value, array)=>{
    if(value%2===0){
        return index
    }
})
console.log(arrMap)