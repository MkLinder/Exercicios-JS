let num = [8, 1, 7, 4, 2, 9]

/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
// SIMPLIFICANDO ESSE CÓDIGO

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Procurando um valor dentro do array

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
