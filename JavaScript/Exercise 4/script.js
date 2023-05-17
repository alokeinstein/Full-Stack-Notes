/*  const myClock = setInterval(time,1000)

function time () {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
};

function stopTime(){
    clearInterval(myClock)
} *//* let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  document.write(h + ": ", m + ": ", s + " ", "</br>"); */

  function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + " : " + mm + " : " + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();