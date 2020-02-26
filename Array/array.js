/* O array no javascript é um objeto, sendo um objeto especial com caracteristicas 
propias, porem não existe o tipo nativo de dados array no javascript. Sendo um objeto,
em vez de organizar os atributos em chaves e identificadores, ele organiza apartir de um
indice de uma estrutura indexada começando do zero, sendo uma estrutura heterogênia de dados. */

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma não recomendada.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // notação literal, recomendada.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // add um elemento dentro de um array
console.log(aprovados.length) // tamanho do array

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // retorna um novo array ordenado
console.log(aprovados)

delete aprovados[1] // exclui o elemento porem não o ordena, coloca undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // remove e adiciona elementos.
console.log(aprovados)