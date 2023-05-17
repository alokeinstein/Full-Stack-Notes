 const myClock = setInterval(time,1000)

function time () {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
};

function stopTime(){
    clearInterval(myClock)
}