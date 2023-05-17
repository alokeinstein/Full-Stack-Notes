/* promises are used so that many function can be executed parallely and 
consuming time  */

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(function () {
    console.log("this promise is resolved ");
    resolve(true);
  }, 4000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(function () {
    console.log("this promise is rejected");
    reject(new Error("i am an error"));
  }, 4000);
});

//both p1 and p2 will run parallely at the same time not simultaneously
console.log(p1, p2);

//To get the value
p1.then((value) => {
  console.log(value);
});

//To catch the error
p2.catch((error) => {
  console.log("some error occured in p2");
});


p2.then((value)=>{
  console.log(value)
},(error)=>{
  console.log(error)
})