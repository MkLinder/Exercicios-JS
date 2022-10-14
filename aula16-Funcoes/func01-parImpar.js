function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(4) /* Aqui podemos fazer também direto: console.log(parimpar(4)) */
console.log(res)