function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML= 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)    //Aqui estão sendo convertidos para Number
        let p = Number(pas.value)
        if (p <= 0) {
            alert('Passo inválido! Consierando passo 1...')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
            }  
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}` 
            }
        }
       
    }
    
}