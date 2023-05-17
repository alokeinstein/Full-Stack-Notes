//My code
function merge(arr1, arr2) {
    let newArr = []
    let length = arr1.length + arr2.length
    let j = 0

    for (let i = 0; i < length; i++) {
        if (newArr.length == length) {
            break
        }
        
        if (arr1.length <= i && arr2.length > j) {
            newArr.push(arr2[j])
            j++
        } else if (arr2.length <= j && arr1.length > i) {
            newArr.push(arr1[i])
        } else if (arr1[i] < arr2[j] && arr1.length > i && arr2.length > j) {
            newArr.push(arr1[i])
        } else {
            newArr.push(arr2[j])
            j++
            i--
        }
    }

    return newArr
}

console.log(merge([20, 30, 40, 40], [1, 2]))





/*REFACTORED CODE*/
function merge(arr1,arr2){
    let newArr = []
    let i=0
    let j=0

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            newArr.push(arr2[j])
            j++
        }else{
            newArr.push(arr1[i])
            i++
        }
    }

    while(i<arr1.length){
        newArr.push(arr1[i])
        i++
    }

    while(j<arr2.length){
        newArr.push(arr2[j])
        j++
    }

    return newArr
}

merge([20, 30, 40, 40], [1, 2])
