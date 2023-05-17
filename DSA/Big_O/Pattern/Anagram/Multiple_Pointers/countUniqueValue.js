//implement a function called countUniqueValues that accept the sorted array as argument and count the unique
//values in the array. There can be negative numbers in the array too but it will always be sorted.


//make a object to store the numbers as key and values as how many times they are coming in array
//then by using keys() and length method , we can know that how many unique numbers is used in array

function countUniqueValues(arr){
    let obj={}
    for (let i=0; i<arr.length; i++){
       let  val = arr[i]
        obj[val] ? obj[val] +=1 : obj[val]=1
    }
    console.log(obj)
    return Object.keys(obj).length
}

countUniqueValues([1,2,3,1,2,3,1,2,3,1,,2,3,1,2,3,4,5,6,1,2,3,0])