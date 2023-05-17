//My own method is better(if in question sorted array was not given, then only) than this because in my array u dont need to enter the sorted array 
//But according to question this code  is better 

function countUniqueValues(arr){
    let i=0;
    for(let j=0; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j]
        }
    }
     console.log(i+1)
}

countUniqueValues([1,1,2,2,3,4,5,6,6,6,6])