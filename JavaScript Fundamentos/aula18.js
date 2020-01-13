// Usando let em loop 2

const funcs = []

for (let i = 0; i < 10; i++) { /* pelo fato de let ter escopo de bloco, ele lembra qual o valor
                                de i naquele momento */ 
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

