function Pessoa() {
    this.idade = 0

    const self = this // dribla o this, não recomendado.
    setInterval(function() { // dispara outra função dependendo do intervalo passado.
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa //instancia a função