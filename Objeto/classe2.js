class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extender uma classe que terar como prototipo uma outra função da classe avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chama a função construtora da superclasse.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)