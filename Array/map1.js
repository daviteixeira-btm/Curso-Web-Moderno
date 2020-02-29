
/*Serve para fazer uma transformação em um Array. A ideia é mapear um array para outro array do mesmo tamanho
só que com os dados transformados. Sendo que o array original e o trasformado tem o mesmo tamanho. */

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { // função recebe o elemento atual
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)