//Symnols são indentificadores unicos, podem ser utilizados para gerar propriedades privadas.

const uniqueID = Symbol('hello')

const obj = {
    [uniqueID]: 'hello'
}
//well know symbols
Symbol.iterator
Symbol.toStringTag
Symbol.split

const arr = [1, 2, 3, 4]
const srt = 'Digital inovation One'
const it = arr[Symbol.iterator]()

console.log(it.next()) //Traz o valor 1
console.log(it.next()) //Traz o valor 2
console.log(it.next()) //Traz o valor 3
console.log(it.next()) //Traz o valor 4

while (true) {
    let { value, done } = it.next()
    if (done) {
        break
    }
    console.log(value)
}

for (let value of arr) { //MESMA COISA QUE O WHILE
    console.log(value)
}

const obj2 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                i++
                return {
                    value: this.value[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
console.log(it.next())

//GENERATORS

function* hello() {
    console.log('Hello')
    yield;
    console.log('from')
    yield;
    console.log('Function')
}
hello();

const it2 = hello()
console.log(it2.next())

function* naturalNumbers() {
    let n = 0
    while (true) {
        yield n;
        n++
    }
}

let it3 = naturalNumbers()
console.log(it3.next())

const obj4 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++)
            yield this.values[i]
    }
}
for (let value of obj4) {
    console.log(value)
}

/*
Propriedades de objetos criadas usando identificadores únicos podem ser descobertas usando:
R: Utilizando o symbol utilizado como identificador ou o método Object.getOwnPropertySymbols.

Symbols podem ser usados para gerar:
R: Identificadores únicos.

Tipos e objetos iteráveis possuem:
R: Um método responsável por gerar o seu iterador, sendo acessível pela chave Symbol.iterator.

Generators podem "pausar" sua execução através de qual palavra reservada:
R: yield.

Podemos utilizar generators para construir objetos iteráveis?
R: Sim, pois generators utilizam a mesma interface e podem ser utilizados para construir o iterador de um objeto iterável.

Qual a forma de retornar um valor em cada iteração de uma função generator?
R: Incluindo o valor após a palavra yield.

O "for of" é utilizado para:
R: Obter os valores gerados através do iterador em um objeto ou tipo iterável.

Ao invocar o método next de um iterador, o seu retorno deve ser:
R: Um objeto contendo um método next e uma propriedade done.

Ao consumir um iterador, como sabemos se a iteração finalizou?
R: Através da propriedade done no objeto retornado na iteração.

Generators podem receber valores em cada pausa para continuar sua execução?
R: Sim, podemos enviar valores de volta ao iterador passando o valor como parâmetro ao método next.
*/