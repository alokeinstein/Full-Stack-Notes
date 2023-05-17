let x= document.getElementsByTagName("span")[0]
console.log(x)

//console.dir span ko object ke form me print kar ke dega 
let y = document.getElementsByTagName("span")[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

/* innerHTML outerHTML*/


//first.innerHTML
//b>Hey</b> i am span'
//first.innerHTML = "<i>hey i am changing span using inner html</i>"
//'<i>hey i am changing span using inner html</i>'
//first.outerHTML
//'<span id="first"><i>hey i am changing span using inner html</i></span>'

document.body.firstChild.data

//textContent gives all the content from the website alltogether
console.log(document.body.textContent)

//hidden attribute ko false karne par jo element hide hue hai wo dikhne shuru ho jayenge
console.log(first.hidden = false)