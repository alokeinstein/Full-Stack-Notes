let id1 = document.getElementById("idOne")
let span1 =  document.getElementById("sp1")
let id2 = document.getElementById("idTwo")
console.log(id1)


/* MATCHES */

//elem.matches = to check if the element matches the given CSS selector

//class of id1 is not class, so output will be false
console.log(id1.matches(".class"))

//class of id1 is box, so output will be true
console.log(id1.matches(".box"))



/* CLOSESTS */

//.closest check karta hai ki kya ek  given css selector uske ancestor me hai ya nahi
console.log(sp1.closest("#sp1"))
console.log(sp1.closest(".box"))



/* CONTAINS */

//id1 contains sp1 and sp1 also contains itself so the output will be true
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))

//id2 doesnt contains sp1 so output will be false
console.log(id2.contains(sp1))