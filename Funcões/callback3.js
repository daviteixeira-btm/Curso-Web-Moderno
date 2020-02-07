// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { // chama uma callback sempre que o usuario
                                                                  // clicar no body.
    console.log('O evento ocorreu!')
}