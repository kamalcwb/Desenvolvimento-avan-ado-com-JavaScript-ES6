function sum(a, b) {
    var value = 0

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value
}
console.log(sum(5, 5, 6, 3, 7))
//Modo ECMA6 REST OPERATOR
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(5, 5, 6, 3, 7))

const sum = (a, b, ...rest) => {

}

const mut = (...args) => args.reduce((acc, value) => acc * value, 1)
//SPREAD OPERATOR
//STRINGS, ARRAYS, LITERAL OBJECTS E OBEJETOS ITERAVEIS
const str = 'Digital Inovation One'

function logArgs(...args) {
    console.log(args)
}
logArgs(...str)

const arr = [1, 2, 3, 4, 5]
logArgs(...arr)

const arr2 = [...arr, 6, 7, 8, 9] // concatena o arr com o arr2

const obj = {
    teste: 123
}
const obj2 = {
    ...obj,
    teste2: 'Ola'
}
console.log(obj2)

const objMerged = {
    ...obj,
    ...obj2
}

const obj3 = {
    test: 123,
    subObj: {
        test: '123'
    }
}
const obj4 = {
    ...obj3, subObj: { ...obj3.subObj }
};
obj4.subObj.test = 456