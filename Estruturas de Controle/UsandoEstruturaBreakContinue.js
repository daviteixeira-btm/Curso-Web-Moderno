// Usando Estruturas Break and Continue

/* Essas estruturas causam desvio de fluxo, ou seja, sair de um ponto e ir
para outro ponto do codigo */

/**
 * Break: Não influencia em um bloco do tipo : IF;
 *        Influencia em blocos: Swtch, For e While.
 * 
 * O break interrompe e sai do laço.
 *  
 * Continue: Influencia: For e While.
 * 
 * O continue interrompe mais nao sai do laço. 
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // atribui o for a baixo para esse nome.
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // chama o bloco mais externo.
        console.log(`Par = ${a},${b}`)
    }
}