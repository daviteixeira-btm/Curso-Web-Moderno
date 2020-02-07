function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // call chama e execulta a função 
console.log(getPreco.apply(carro)) // apply tambem chama e execulta a função

// A diferença do call para o apply é a passagem de parametros

console.log(getPreco.call(carro, 0.17, '$')) // primeiro parametro é o contexto, e depois os parametros da função.
console.log(getPreco.apply(global, [0.17, '$'])) // primeiro parametro é o contexto, depois uma array com os parametros.