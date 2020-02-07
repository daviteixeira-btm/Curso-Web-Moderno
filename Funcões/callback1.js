/*A ideia do callback é você passar uma função para outra função
e como determinado evento acontecer, essa função que você passou
vai ser disparada, vai ser chamada de volta.

A função callback pode ser chamada varias vezes ou apenas uma vez,
isso vai depender do contexto do qual você está passando essa função.*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // para cada elemento encontrado, essa função chama
fabricantes.forEach(fabricante => console.log(fabricante))