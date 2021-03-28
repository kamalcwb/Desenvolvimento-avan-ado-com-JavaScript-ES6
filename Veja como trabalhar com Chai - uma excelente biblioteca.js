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