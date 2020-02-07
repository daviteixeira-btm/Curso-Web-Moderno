const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // por conta do contexto lexico a fução vairetornar global, pois ela carrega com sigo o local na qual foi definida.