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

