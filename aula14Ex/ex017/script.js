function calc() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {   // Se o input estiver vazio ele roda o alerta.
        alert('Digite um número para gerar a tabuada!')
       
    } else {   // senão ele pega o número.
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Para limpar a janela, caso já tenha sido geraga uma tabuada anteriormente. Começar com espaço vazio.
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Esta linha não é tão útil para JS, mas para outras linguagens é importante para mostrar qual item foi selecionado.
            tab.appendChild(item)
            c++
        }
    }
}
