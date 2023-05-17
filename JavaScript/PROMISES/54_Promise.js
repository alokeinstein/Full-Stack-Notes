//syntax of the promise 
//promise have two properties   1.state  2.result
let promise = new Promise(function(resolve, reject){
    alert("this message is from the promise ")
    reject (100)
})

console.log("hello world 1")

setTimeout(function(){
    console.log("hello world  in 2 sec")
},2000)

console.log("hello world after set timeout function ")

console.log(promise)



//Pseudocode

//fetch google homepage   ====> console.log("google.com homepage  done ")
//fetch data api
//fetch pictures from the server    
//print downloading 