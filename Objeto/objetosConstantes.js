// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //uma vez que le ta congelado, vc não consegue mexer mais no objeto.

pessoa.nome = 'Maria' // ele vai ignorar, continuando sendo pedro.
pessoa.end = 'Rua ABC' // tambem não da para dicionar endereço
delete pessoa.nome // tambem não da para excluir o objeto.

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' }) // criando desde o começo um objeto constante.
pessoaConstante.nome = 'Maria' // não funciona.
console.log(pessoaConstante)