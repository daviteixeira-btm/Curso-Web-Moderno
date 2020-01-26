// Operador Destructuring #2

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Desestruturação alinhada

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//DESTRUCT NO PONTO DE VISTA DO OBJETO USA A SINTAXE DE CHAVES, QUANDO É DE UMA ARRAY ELE USA COLCHETES.