// Var em loop 2

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // vai imprimir 10
funcs[8]() // vai imprimir 10, pois var nao tem escopo de bloco, o valor sempre vai ser o de estouro.  