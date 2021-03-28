
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

/**
 Ao construir um objeto literal a partir de outro, utilizando o spread operator, a ordem é importante pois:
 R: A ordem define quais valores das chaves com o mesmo nome irão prevalecer.

O destructuring pode ser usado em nested objects (objetos aninhados)?
R: Sim.

Spread operators podem ser utilizados onde?
R: Em arrays, strings, na definição de objetos literais e objetos iteráveis.

Qual a forma de aplicar o destructuring assignement em um array (arr), atribuindo o valor do seu primeiro índice para uma constante teste?
R: const [ teste ] = arr;

Quando o rest operator é utilizado nos argumentos de uma função, além da lista de argumentos, ele também traz:
R: Os métodos e propriedades de array por ser uma instância de um array.

Ao realizar o seguinte destructuring assignment, qual será o valor da variável 'four'?

let [one, two, three, four] = ['Digital', 'Innovation', 'One'];
R: undefined

Antes da existência do spread operator, qual era uma das formas utilizadas para enviar os items de lista como argumentos para uma função?
R: Utilizando o método de função apply.

É possível combinar default function arguments com destructuring?
R: Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.

Ao utilizar o spread operator em uma string o seu retorno será:
R: Uma lista contendo cada um dos caracteres da string.

Qual a forma de combinar dois arrays utilizando spread operator?
R: [...arr1, ...arr2];
 */