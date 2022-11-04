function calcular() {
    let nasc = document.querySelector('#nasc')
    let atual = document.querySelector('#atual')
    let msg = document.querySelector('#msg')

    

    if ( nasc.value > atual.value) {
        window.alert('Data de nascimento maior que ano atual, impossível calcular!')
        nasc.value = ''
        atual.value = ''
        nasc.focus()
    } else {
        idade = Number(atual.value) - Number(nasc.value)
        msg.innerHTML = `Você tem ${idade} anos.`
    }
    nasc.value = ''
    atual.value = ''
    nasc.focus()
    
}




