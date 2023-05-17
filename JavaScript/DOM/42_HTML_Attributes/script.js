//getAttribute(name) : used to get the value of an attribute
let first = document.getElementById("first")

let a = first.getAttribute("class")
console.log(a)

/* hasAttribute(name) : it checks weather a elemet has that particular attribute or not, if yes output will be true and if no then output will be false */
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("span"))



/* elem.setAttribute(name, value) : it is used to give new value to the attribute */

//this will hide the content of id named first
//console.log(first.setAttribute("hidden", "true"))

console.log(first.setAttribute("class", "true sach"))


/* elem.removeAttribute(name) :  method to remove the attribute from the element */
//first.removeAttribute("class")


/* elem.attributes(name) : method to get collection of all atributes */
console.log(first.attributes)


/* data-*  : method by which we can create custom attribute but it should always start with 'data-' . they are available in a property called dataset. if an element has an attribute name "data-one" it will available with element.dataset.one   */
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)