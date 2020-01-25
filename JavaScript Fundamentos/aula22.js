// Notação Ponto

console.log(Math.ceil(6.1))     // Arredonda pra cima
console.log(Math.floor(6.1))    // Arredonda pra baixo

const obj1 = {}
obj1.nome = 'Bola'              // Mesmo não tendo o atributo nome, ele aloca dinâmicamente
// obj1['nome'] = 'Bola2'       // Aqui ele sobrepõe a primeira
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()