const assert = require('assert')
const Math = require('../Math.js')
const expect = require('chai').expect


describe('Math class', function () {
    it('Sum two numbers', function (done) {
        const math = new Math()
        this.timeout(3000)

        math.sum(5, 5, value => {
            expect(value).to.equal(10)

            done()
        })

    })
})

/*
Os testes unitários são responsáveis por testar o quê?
R: A menor unidade do seu código como funções, métodos e afins.

Como aguardamos um código assíncrono finalizar em um teste no mocha?
R: Utilizando a função done que vem como parâmetro ao it posteriormente à execução do código assíncrono.

Os testes funcionais visam:
R: Garantir o correto funcionamento de uma funcionalidade de ponta a ponta.

Quais são as etapas que compõem o TDD?
R:Escrita do teste descrevendo o comportamento esperado, escrita do código com o comportamento esperado e refatoração.

A responsabilidade dos testes de integração é:
R: Garantir o funcionamento de unidades menores trabalhando em conjunto com outras.

Caso não seja passada nenhuma configuração de diretórios ao mocha, qual será o diretório na raiz do projeto onde serão buscados os testes?
R: test.

Qual a maior vantagem de utilizar o chai como ferramenta de asserção?
R: Ao escrever asserções utilizando chai, uma das maiores vantagens é a sua escrita muito mais expressiva do comportamento esperado.

Ao utilizar o módulo assert do Node.js, quando utilizamos seu método equal para validar dois valores, caso os dois não sejam iguais, qual será o seu
comportamento?
R: Será disparado um erro contendo informações sobre a asserção incorreta.

Qual é um dos principais objetivos do BDD (desenvolvimento orientado a comportamento)?
R: Integrar regras de negócio com linguagens de programação.

Qual a função do método spy do sinon?
R: Criar uma função ou interceptar a execução de uma outra função a fim de obter dados sobre como a mesma foi invocada.
*/