const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // converte para o formato textual, excluindo a função.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // da erro.
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // da erro.

/*Regra: todo atributo no formato JSOM deve ser delimitado por aspas duplas */

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transforma json para objeto.
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))