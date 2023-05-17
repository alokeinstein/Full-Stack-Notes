//there is a difference between attaching multiple handlers to a promise & Promise chaining

let p1 = new Promise((resolve,reject)=>{
    resolve("Promise 1 is resolved")
})

p1.then((value)=>{
    console.log("hurray")
    setTimeout(()=>{
        console.log(" msg will be shown after 6 seconds, this is from the 1st handler")
    },6000)
})

p1.then((value)=>{
    console.log("this is the second handler of Promise 1")
})


//Pseudocode

//let p1 = new Promise((resolve,reject)=>{resolve(1)})

//p1.then(handler1)            ---runs Independently
//p1.then(handler2)            ---runs Independently
//p1.then(handler3)            ---runs Independently

//handlers run independently while Promise chaining is connected to each other as the name suggest

