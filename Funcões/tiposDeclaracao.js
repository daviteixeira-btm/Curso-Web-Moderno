console.log(soma(3, 4))

// function declaration
function soma(x, y) { // o interpretador do js primeiro carrega as funções, para só depois executar o codigo.
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))