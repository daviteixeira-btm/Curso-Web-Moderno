// Operador Destructuring #1

// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa  /* O operador destructuring é uma forma simplificada de tirar de uma 
                                   estrutura, nesse caso de um objeto dois atributos. */
console.log(nome, idade)

const { nome: n, idade: i } = pessoa    // as chaves representam o operador destructuring
                                        /* os dois pontos ":", equivale a criação de variaveis */
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)     /* quando se não existe, ele vai retornar undefinid, porem como bemHumorada
                                           tem um valor padrao ela retorna true */

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa // vai dar problema, pois não existe.
console.log(ag, num)

