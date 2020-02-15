// Object.preventExtensions

/*Ele vai previnir e não vai permitir que so seu objeto seja estendido, ou seja não vai conseguir
adicionar novos objetos.*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // testa se foi criado com extenção ou não.

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) 

// Object.seal

/*Quando você sela um objeto, você nao pode add novos atributos, mão consegue atributos do objeto, 
porem você consegue modificar os valores dos atributos do obejtos. */

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // esta selado ou não.

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes