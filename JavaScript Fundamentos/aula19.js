// Hoisting

/* Acontece quando o propio interpretador da linguagem joga o valor da variavel
declarada com var para cima */

console.log('a =', a)
var a = 2
console.log('a =', a)

function teste() {
    console.log("b =", b)
    var b = 4
    console.log("b =", b)
  }
  
// O efeito com variaveis var dentro de função é o mesmo.