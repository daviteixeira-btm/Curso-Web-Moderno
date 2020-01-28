// Operador Destructuring #4

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] /* Uma forma de inverter duas variaveis é usando o operador
                                              Destruct, criando assim um novo array*/
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Arredonda para baixo.
}

console.log(rand([50, 40])) /* vai retornar os valores de forma incorreta, pois primeiro foi o maximo
                               depois o minimo. */
console.log(rand([992]))    /* passando apenas um unico valor, ele vai ser o minimo e os valores apresentados
                               serão os de maximo sendo 1000 */
console.log(rand([, 10]))   /* passando apenas o segundo, ele vai execultar o minimo como zero */
console.log(rand([]))       // uma array vazia significa que ele vai assumir os valores padrões de zero e mil
console.log(rand())         // passando nada, vai da problema dando undefinid.