//FUNÇOES TRADICIONAIS
function log(value) {
    console.log(value)
}
log('teste')
// FUNÇOES ANONIMAS
var log = function (v) {
    console.log(v)
}
//ARROW FUNCTIONS

var sum = (a, b) => {
    return a + b
}

var sum = (a, b) => a + b //contem o return implicito para funçoes simples

var sum = a => a + 5 //se tiver apenas um argumento na função pode-se omitir os parenteses

var sum = (a = 5) => a + 5 // deve-se utilizar os parenteses em cado de utilizar valores default

var createObj = () => ({ test: 123 })

var obj = {
    showContext: function showContext() {
        console.log(this)
    },
    log: function log(value) {
        console.log(value)
    }
}
obj.showContext()