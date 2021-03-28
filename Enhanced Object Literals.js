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
//Encurtando a funçao
var obj = {
    sum(a, b) {
        return a + b
    }
}
//Propriedade
var propName = 'test'

var obj = {}
obj[propName] = 'prop value'
//
var propName = 'teste'
var obj = {
    [propName + 'concat']: 'prop value'
}
console.log(obj)

/*
Podemos referenciar outro argumento como valor padrão para um argumento?
R: Sim, mas apenas se o argumento vier anteriormente ao que está sendo atribuído.

Qual a forma de criar uma função construtora com arrow functions?
R: Não podemos criar funções construtoras usando arrow functions.

Podemos realizar expressões para definir nomes de atributos?
R: Sim, utilizando colchetes.

Quando podemos omitir os parênteses de uma arrow function?
R: Quando existir apenas um argumento e nada mais.

Qual a forma tradicional de escrever funções, antes de existirem arrow functions?
R: A palavra function, o seu nome de maneira opcional, os parênteses e as chaves para o corpo.

Qual a forma de atribuir um valor padrão ao argumento de uma função que surgiu com o ES6:
R: Usando o caractere '=' seguido do valor que queremos atribuir ao argumento.

O que é 'lazy evaluation'?
R: A característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o
argumento for indefinido.

Quando podemos omitir o valor de uma propriedade ou método ao definir um objeto literal?
R: Quando o valor vier de uma variável com o mesmo nome da propriedade ou método.

As arrow functions são sempre:
R: Funções anônimas.

var obj = {
  sleep: function() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}

obj.sleep();
R: O objeto 'obj'.
*/