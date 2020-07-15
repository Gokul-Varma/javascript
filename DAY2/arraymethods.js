//        ARRAY METHODS
//length-used to find the  length
var car=["benz","audi","bmw"]
console.log(car.length)
console.log(car)
//push ()-to add element at and of th earray
console.log(car.push("honda"))
console.log(car)
//unshift()-used to add the elememin the index
console.log(car.unshift("ferari"))
console.log(car)
//pop()-removes an element at the end
console.log(car.pop())
console.log(car)
//shift()-used to remove th element at thhe indexx
console.log(car.shift())
console.log(car)
//splice ()-used to insert,remove,and ipdate the lemnets
let arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr)

console.log(arr.splice(0, 3, "Let's", "dance"));
console.log(arr)
let arrary = ["I", "study", "JavaScript"];
arrary.splice(2, 0, "complex", "language");
console.log(arrary)
//join()-used to join the arraysn ist forms a string
var x=["gokul","varma"]
var y=[1,2,3]
console.log(x.join(y))
//concat()-merges the array
console.log(x.concat(y))
//slice()-used to extract  the position of elemnts in array
console.log(arr.slice(1,3))