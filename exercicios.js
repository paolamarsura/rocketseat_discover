// 1. Declare uma variável de nome weight

let weight;
// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:

name: String
age: Number (integer)
stars: Number (float)
isSubscribed: Boolean

*/
let name = 'Paola'
let age = 29
let stars = 4.5
let isSubscribed = false

// 4. A variável student abaixo é de que tipo de dados ?

// let student = {};

// console.log(typeof student)

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

let student = {
    name: 'Paola',
    age: 29,
    weight: 45,
    isSubscribed: false
}

// 4.2 Mostre no console a seguinte mensagem:

// <name> de idade <age> pesa <weight> kg.

// console.log (`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio. */

let students = []

/* 6. Retribua valor para a variável acima, colocando dentro dela objeito student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array). */

students = [
    student
]

console.log(students)

/* 7. Coloque no console o valor da posição zero do array acima. */

console.log(students[0])

/* 8. Crie um novo student e coloque na posilão 1 do Array students */

const José = {
    name: "José",
    age: 23,
}

students = [
    student,
    José
]

// ou

students[1] = José

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que ? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1
 
Ao executar terá o valor de undefined devido a variável sofrer o hosting
*/