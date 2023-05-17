let x =  function(e){
    console.log(e.target)
    console.log(e.type, e.clientX, e.clientY)
    //alert("hello world 1")
}
 let y = function(e){
    //alert("hello world 2")
 }


//on click it will show two alert via single button click
batam.addEventListener('click', x)
batam.addEventListener('click', y)


//elem.removeEventListener : removes a particular event 
/* let num = prompt("enter your favourite number")
if(num == "2"){
    batam.removeEventListener('click', x)
} */