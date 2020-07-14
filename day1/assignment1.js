//1)console.log-Mainly used to (print) the output to the console.
console.log("javascript")
//2)console.time and console.timeEnd-is used to count the execution of the code withnin these
console.time()
console.log("i was learning the js")
console.log("it was fun to learn")
console.timeEnd()
//3)console.clear()-it was used to clear the console
//console.clear()
//console.error()-used to error message will be highlighted with redcolor.
console.error('This is a simple error'); 
//console.warn()-used to highlight the warning msg in yellowcolor
console.warn("this is warning msg")
//console.table()-us to generate a table inside a console. The input must be an array or an object which will be shown as a table.
var a={name:"gokul",age:20,city:"kakinada"}
var b={name:"varma",age:22,city:"vuntur"}
var c={name:"vinay",age:24,city:"hyd"}
console.table({a,b,c})
//console.group() and console.groupEnd()-allows us to group contents in a separate block, which will be indented
console.group();
console.log("gokul");
console.log("varma");
console.log("vinay varma");
console.groupEnd()
console.log("ashok and likhi")    
//Custom Console Logs-%c is used to style the content in that
console.log('%c javascript is to learn','color:bluefont-size: 2em');
