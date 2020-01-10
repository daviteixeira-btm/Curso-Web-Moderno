//Usando Tamplate String

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Tamplete String permite mais coisas no codigo

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)     //Considera as quebra de linha

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)