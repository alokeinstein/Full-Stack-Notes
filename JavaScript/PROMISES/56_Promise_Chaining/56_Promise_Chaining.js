// Promise chaining is used to run asynchronus task in a specific order of series 
//setTimeout is the best example of asynchronus function   
// We can chain the promise and pass the resolve values to one another like this 

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("this will be shown after 2 second")
        resolve(56)
    },2000)
})

p1.then((value)=>{
    console.log("we are done")
    
    //we can make new promises and chain them to one another 
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is Promise 2 inside .then")
            resolve("Promise 2")
        },2000)
    })
    //here we will return our p2
    return p2
}).then((value)=>{
    //resolved value of p2
    console.log(value)
    
    //here i will show how not to take a variable and directly return the new Promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise 3")
        },2000)
    })
    //Now i dont have to write extra line of code here as the i have already given the return value
}).then((value)=>{
    console.log("Now we are really done with 1----00% ")
})