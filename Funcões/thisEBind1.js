const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) /*
                                                  * O bind você passa o objeto no qual você quer que
                                                   seja resolvido o this.
                                                   
                                                   * Metodo responsavel por amarrar um determindado objeto
                                                     para ele ser o dono da execução sempre que o metodo
                                                     for chamado. */
falarDePessoa()