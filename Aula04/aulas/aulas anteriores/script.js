function verificar() {
    var sal = document.querySelector('#sal')
    var res = document.querySelector('#res')
    var objt = document.querySelector('#obj')
    var test = document.querySelector('#test')
    var tempo = Number(objt.value) / Number(sal.value)
    
    document.body.style.background = 'black'
    res.innerHTML = `Você levará ${tempo} meses para alcançar seu objetivo.`
    test.innerHTML = 'Siga em frente, investidor!'
}