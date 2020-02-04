// Usando Estrutura For In

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // para cada um dos elementos, ele vai dar o indice
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) { // percorre todos os atributos
    console.log(`${atributo} = ${pessoa[atributo]}`)
}