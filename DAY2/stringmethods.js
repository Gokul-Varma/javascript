// STRING METHODS IN JS 
//string length- to find the string length
var name ="gokulvarma"
console.log(name.length)
//indexof()-to find the first occurence of text
var a="this is javascript learning program "
console.log(a.indexOf("javascript"))
//chartAt()-is also used to fimd the occurence of text
//slice()-it extracts the string and return the extracted part in new string
console.log(name.slice(-10,-5))
//substring()-similar to slice but doesnt contain the negative integers
console.log(a.substring(6,12))
//replace()-used to replace the text with other
console.log(a.replace("program","project"))
//toUppercase-capital letters
console.log(name.toUpperCase())
//toLowerCase()-small ltters 
console.log(name.toLowerCase())
//Concat()- to join the stings
var x="javascript and "
var y="python"
console.log(x.concat(y))
//trim()-remopves spaces in string in first only
var b="       apple"
console.log(b.trim(" "))

//split()-used to conert the string to array

console.log(a.split(" "))