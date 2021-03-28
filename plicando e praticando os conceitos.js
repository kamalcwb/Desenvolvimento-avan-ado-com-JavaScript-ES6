import EventEmitter from 'events';
import { emit } from 'node:process';
const emitter = new EventEmitter()

emitter.on('User logged', data => {
    console.log(data)
})
emitter.emit('User logged', { user: 'Avell' })

/*
A palavra reservada await pode ser usada quando?
R: Apenas dentro de uma função criada utilizando a palavra async e para aguardar a resolução de uma promise.

Qual a forma de processar múltiplas Promise de maneira paralela e tratar o retorno de todas posteriormente?
R: Utilizando o método Promise.all.

Utilizar callbacks ao desenvolver JavaScript assíncrono pode trazer quais tipos de problemas quando não utilizado com cautela?
R: Problemas com a legibilidade e manutenção do código, pois podemos cair no chamado "callback hell".

Qual o objetivo do método Promise.race?
R: Criar uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.

Quais os três estados possíveis de uma Promise?
R: Pending, fulfilled e rejected.

Qual a diferença entre o método on e once de uma instância EventEmitter?
R: Um subscreve uma função a todas as ocorrências de um evento, o outro apenas para a primeira ocorrência.

Qual o retorno da invocação da função fetch?
R: Uma Promise.

Qual o método de uma Promise utilizado para tratar seus erros?
R:O método .catch que irá receber uma função para o tratamento.

Qual é uma das formas de construir uma Promise no JavaScript?
R: Invocando o seu construtor e passando uma função ao mesmo. Ex: new Promise((resolve, reject) => {}).

Uma requisição feita utilizando fetch só irá disparar um erro caso:
R: Aconteça um erro de rede e não seja possível realizar a requisição.
 */