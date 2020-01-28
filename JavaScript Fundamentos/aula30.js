// Tratamento de erro: (Try/Catch/Throw)

function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // lançar ou relançar um erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // bloco que jugamos que pode haver um erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // tratamento de erro
        tratarErroELancar(e)
    } finally { // mesmo que ocorra erro ou nao, ele vai executar essa função.
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj