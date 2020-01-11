//Tipos em JavaScript: Array

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Add valores ao array
console.log(valores)

console.log(valores.pop()) // remove o valor da ultima posição do array
delete valores[0] // deleta o valor na posição do array
console.log(valores)

console.log(typeof valores) // Uma array é do tipo objeto.