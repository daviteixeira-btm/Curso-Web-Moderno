//Tipos em JavaScript: String

const escola = "Cod3r"

console.log(escola.charAt(4)) // Mostra a letra do índice 4 da string
console.log(escola.charAt(5)) // Mostra o índice 5 na string, nesse caso, vazio
console.log(escola.charCodeAt(3)) // Mostra o número do índice a tabela ASCII
console.log(escola.indexOf('3')) // Mostra em que indice o digito esta na palavra

console.log(escola.substring(1)) // Imprime a proxima casa até o final a partir do indice escolhido
console.log(escola.substring(0, 3)) // Vai do primeiro valor passado até o ultimo sem imprimir o ultimo

console.log('Escola '.concat(escola).concat("!")) // Concatena as strings
console.log('Escola ' + escola + "!") // O + tambem concatena
console.log(escola.replace(3, 'e')) // Subistitue o valor do indice pelo valor passado

console.log('Ana,Maria,Pedro'.split(',')) // Transforma a string em array semparado por virgula