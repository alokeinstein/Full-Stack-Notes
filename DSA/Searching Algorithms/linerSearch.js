//Pseudocode
//This function accepts an array and a value 
//Loop through the array and check if the current array element is equal to the value 
//If it is, return the index at which the element is found
//If the value is never found then return -1

function search(arr,elem){
    for(let i=0;i<=arr.length; i++){
        if(arr[i]===elem){
            return i
        }
    }
     return -1
}
search([7,5,1,2,3,2], )