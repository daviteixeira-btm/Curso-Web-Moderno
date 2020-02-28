const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // lançamos uma callback para cada interação que ocorrer na array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // passar uma arrow function com um parametro.

const exibirAprovados = aprovado => console.log(aprovado) // armazenar a função em uma constante.
aprovados.forEach(exibirAprovados)

// forEach sempre passa o nome e o indice. como tambem como o array sendo o terceiro parametro.