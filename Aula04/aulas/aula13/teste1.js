let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor não foi encontrado no vetor!')
} else {
    console.log(`O valor está na posição ${pos}.`)
}


/*for (pos; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/


 // .push(valor) adiciona o valor ao fim do vetor
 // .sort() ordena o vetor
 // .indexOf(valor) retorna a posição em que se encontra o valor