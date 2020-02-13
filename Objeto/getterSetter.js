const sequencia = {
    _valor: 1, // convenção, pretender ser acessa internamente.
    get valor() { return this._valor++ }, // pegar
    set valor(valor) {  // passar
        if(valor > this._valor) { // beneficio do set para colocar validações.
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)