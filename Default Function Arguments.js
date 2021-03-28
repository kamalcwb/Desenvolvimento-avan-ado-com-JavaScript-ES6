function mult(a = 1, b = 1) {
    return a * b
}

function mult(a, b = a) {
    return a * b
}

//lazy evaluation 
function randomNumber() {
    return Math.random() * 10
}

function mult(a, b = randomNumber()) {
    return a * b
}