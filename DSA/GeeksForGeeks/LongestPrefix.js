let arr =['geeksforgeeks', 'geeks',' geek', 'geezer']
let smallestString = ''
for(let i=0; i<arr.length; i++){
    if(arr[i].length > arr[i+1].length){
        smallestString = arr[i+1]
    }else{
        smallestString = arr[i]
    }
}
    console.log(smallestString)
    