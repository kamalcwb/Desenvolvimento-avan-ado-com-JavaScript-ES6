//maneira classica
var obj = {
    prop1: 'DIO'
}
//Referanciando uma variavel
var prop1 = 'DIO'

var obj = {
    prop1: prop1
}
// Com o ECMA6 Pode-se referenciar a varial omitindo a segunda parte.
var prop1 = 'DIO'

var obj = {
    prop1
}
//Short rand
function method1() {
    console.log('method called')
}
var obj = {
    method1
}
obj.method1()
//
var obj = {
    sum: function sum(a, b) {
        return a + b
    }
}

console.log(obj.sum(1, 5))