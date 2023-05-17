let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve(2)
        reject(new Error("there is a Error"))
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(3)
    },3000)
})

//we can fetch the value of each promise by this method, BUT WHAT IF you have to fetch all three altogether at the same time, we could use chaining method to return p2 and p3 by `.then` but it woudn't come together, it would come with the time delay set by the coder.

// p1.then((value)=>{console.log(value)})
// p2.then((value)=>{console.log(value)})
// p3.then((value)=>{console.log(value)})

//SO WHAT IS THE SOLUTION????

//1.Promise.all(Promise) : waits for all promise to resolve and returns the array of their result. if any one fails , it becomes the error and other results will be ignored 

// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })


//2.Promise.allSettled(Promise) : waits for all the promises to settle  and return their results as an array of object with status and vlue 

// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



//3. Promise.race(Promise) : Waits for the first promise to settle and its result/error becomes the outcome
// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })


//4.Promise.any(Promise) : waits for the first promise to fulfill (& not reject),  and its result becomes the outcome. Throws Aggregate Error if all the promises are rejected
// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

//5. Promise.resolve(value) : Makes a resolved promise with the given value
// let promise_all = Promise.resolve(6)
// promise_all.then((value)=>{ 
//     console.log(value)
// })


//6.Promise.reject(error) : Makes a rejected promise with the given error
let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
        console.log(value)
})