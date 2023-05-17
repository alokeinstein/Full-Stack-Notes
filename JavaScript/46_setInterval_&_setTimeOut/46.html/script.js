//document.write : it write directly in the webpage
document.write("hello world ");

let a = setTimeout(function () {
  alert("i am inside setTimeout");
}, 5000);

//clearTimeout : how to use the clearTimeout
let b = prompt("Do you want to clearTimeout");
if ("y" === b) {
  clearTimeout(a);
}
//clearTimeout(a)//it will stop the execution of the function .
console.log(a); //In console "1" will be shown which is the timer id

const sum = (a, b) => {
  console.log("yes i am running in " + (a + b) + " sec.");
};

//syntax of setTimeout : setTimeout(function, <delay>, <arguement1>, <arguement2>)
setTimeout(sum, 3000, 1,2)


/* setInterval: it sets the function in loop of a time interval */
/* setInterval(function (){
    alert("this is the loop of setInterval")
},3000) */