//changing the bg color of navbar using dom manipulation of accessing the first element child 
const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }
console.log(changeBgRed())


  let a = document.body;

//first child always access the next thing after the body weather it is space or comment or anything
console.log("First Child of B is ", a.firstChild);

//first element child always access the next element afer the body tag such as div, p,span,nav etc.
console.log("First Element Child of b is ", a.firstElementChild);
