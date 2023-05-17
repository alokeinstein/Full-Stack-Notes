console.log(document.body.firstChild);
console.log(document.body.lastChild);

//this is a node list
console.log(document.body.childNodes);

//in this conditon it will be always true
//console.log(elem.firstChild===elem.childNodes[0]);

//child nodes looks like an array but its not actually an array but a collection we can use array.from to convert it into an array. so Array methods wont work
let arr =  Array.from(document.body.childNodes);
console.log(arr);