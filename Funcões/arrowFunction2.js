function Pessoa() {
    this.idade = 0

    setInterval(() => { // Em arrow functions o this não varia.
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa