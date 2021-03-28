// CONSOLE
/*
console.log('Black Text')
console.warn('Yellow text with alert')
console.error('Red error text')
*/
//CONSOLE TRACE

console.group('My group')
console.log('Info inside group')
console.log('More info')
console.groupEnd('My group')

console.time('Log time')
setTimeout(() => {
    console.timeEnd('Log time')
})

console.table(['Kamal Kaminski', 'Digital Inovation One'])
console.log('%c styled log', 'color: blue;', 'font-size: 40p;')

console.assert(1 === 1, 'Ops')

/*
Qual a maneira mais comum para capturar uma exceção no JavaScript?
R: Através das declarações try e catch.

Qual a objetivo da declaração finally após os blocos de try e catch?
R: Garantir e deixar explícito que um bloco de código será executado em caso de erro ou não.

Qual o objetivo do método console.time e console.timeEnd?
R: Registrar um intervalo de tempo no console do navegador.

Qual o objetivo do método console.assert?
R: Exibir uma mensagem de erro no console caso a asserção não passe.

Qual o objetivo da função pretty print do navegador Chrome?
R: Remover a minificação de um arquivo para possibilitar um debugging melhor.

Quais as vantagens de estender a classe de erro padrão do JavaScript?
R: A possibilidade de adicionar métodos, propriedades e comportamentos ao erro.

Qual o objetivo do método console.error?
R: Mostrar logs de erro no console do navegador.

Qual o objetivo da aba network dentro das ferramentas para desenvolvedor do Chrome?
R: Trazer informações sobre as requisições executadas no navegador.

O que acontece no Chrome ao incluirmos a declaração debugger dentro de um código JavaScript?
R: O código irá parar sua execução ao encontrar a declaração, permitindo o debugging.

Qual o objetivo da aba styles dentro das ferramentas para desenvolvedor do navegador Chrome?
R: Tem o objetivo de mostrar as regras de CSS aplicadas nos elementos, permitindo o debugging dos estilos.
*/