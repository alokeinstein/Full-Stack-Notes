/* //1. write a program to load the javascript file in the browser using Promises. use.then() to show the alert when the script is complete
const loadscript =  async(src) => {
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload = ()=>{
            resolve(src)
        }
        document.head.append(script)
    })
}

let a = loadscript("https://10fastfingers.com/typing-test/english")
a.then((value)=>{
    //this will show the time gap between the loading of script and printing of script
    console.log(new Date().getMilliseconds())
    console.log(value)
    console.log(new Date().getMilliseconds())
})



//2.Write the same program from the previous question using async await funtion 
const main1 = async()=>{
    //load the script in the browser, when loaded print script on the console.
    console.log(new Date().getMilliseconds())
    let a = await loadscript("https://monkeytype.com/")
    console.log(a)
    console.log(new Date().getMilliseconds())
}
main1()

 */






//Question 3: create a promise which reject after 3 seconds use async await to get its value, use try catch to handle its error
/* BETTER THEN HARRY'S ANSWER */

/* 
const p1 = async()=>{ 

    //Promise try ke andar isliye hai bcz agar promise reject hoti hai with an error then ham use catch kar lenge after its execution 
       try{
           return await new Promise((resolve,reject)=>{
                 console.log("Task is in complition....")
                 
            setTimeout(()=>{
                 reject(new Error("whoops!"))
            },3000)
        }).then((value)=>{
            console.log(value)
        })
       }catch(error){console.log("error has been caught")}
}
p1()
 */



//Question No. : 4
//write a program using promise.all() in async await to await 3 promises. Compare its result with the case where we await these promises one by one 

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(2)
    },2000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(3)
    },3000)
})


//with the help of promise.all all the promise run parallely , any promise dont have to wait for other promises to be fulfilled 
//remember the analogy of  3 chefs
const allPromise = async()=>{
    console.time(allPromise)
    let promise_all = await Promise.all([p1,p2,p3])
    console.log(promise_all)
    console.timeEnd(allPromise)
}
allPromise()