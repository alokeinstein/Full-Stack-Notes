//use class and id to show alert on click
document.getElementById("batan").addEventListener("click", function () {
  alert("hypocrisy ki bhi seema hoti hai");
});

document
  .getElementsByClassName("batan")[0]
  .addEventListener("click", function () {
    alert("doosra button hai ye pehla click karna tha ");
  });

//2.bookmark the website                                
let bookmark = document.getElementsByClassName("website");

bookmark[0].addEventListener("click", function () {
  window.location = "https://www.google.com";
});
bookmark[1].addEventListener("click", function () {
  window.location = "https://www.fb.com";
});




//3.glowing bulb effect

setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
  }, 300)
