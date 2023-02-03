// Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

// Desafio: Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

/*

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   E

*/
let nota = 90

function getNota(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaE = nota <= 70 && nota >= 0

    if (notaA) {
        notaFinal = "A"
    } else if (notaB) {
        notaFinal = "B"
    } else if (notaC) {
        notaFinal = "C"
    } else if (notaD) {
        notaFinal = "D"
    } else if (notaE) {
        notaFinal = "E"
    } else {
        notaFinal = "Nota inválida"
    }

    return notaFinal
}

console.log(getNota(101))
console.log(getNota(10))
console.log(getNota(-10))
console.log(getNota(0))
console.log(getNota(90))
console.log(getNota(51))
console.log(getNota(45))