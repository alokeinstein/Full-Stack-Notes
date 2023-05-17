// const fileSystem =  require('fs')
// fileSystem.copyFileSync('file1.txt', 'file2.txt')


/* superheroes */
const superheroes = require('superheroes');
var heroName = superheroes.random()
console.log(heroName)


/* Quotes */
//getLines() method returns an object containing line , book, and author.
// const Line = require("bookquotes");
// console.log(Line.getLines()); // generates an object having a line, name of book and author.

// const Line = require("bookquotes");
// let c = Line.getRandomLine("isp")
// console.log(c);

var marvel = require('marvel-characters')
console.log(marvel())