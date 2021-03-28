
var arr = ['apple', 'banana', 'orange', ['tomato']]

var apple = arr[0]
var banana = arr[1]
var organge = arr[2]
var tomato = arr[3][0]

var obj = {
    name: 'kamal'
}

var name = obj.name

//Destructuring assignment

var [apple2, banana2, orange2, [tomato2]] = ['apple', 'banana', 'orange', ['tomato']]
console.log(tomato2)

var obj2 = {
    name: 'kamal'
}
var { name: name2 } = obj2;
console.log(name2)

//functions
function sum([a, b] = [1, 1]) {
    return a + b
}
console.log(sum([5, 5]))