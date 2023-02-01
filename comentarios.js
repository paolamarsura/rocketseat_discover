// Tipos de dados JS*

/* 

****STRING****

O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. 
Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ) 
e template literals ou template strings ( ), template literals permitem textos multilinhas 
e expressões de linguagem com os caracteres ${ }, por exemplo: 
console.log(A soma de duas unidades é ${1+1}), já as outras não, por exemplo:
 console.log("Isso é um texto").

 *****NÚMEROS*****

 No JavaScript temos 4 tipos de números:
 
 *Os inteiros (por exemplo: 13)
 *Os reais ou float (por exemplo: 83.1)
 *O Not a Number (NaN) 
 *O infinito (Infinity).

  *****BOOLEAN*****

 No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).

 *****NULL / UNDEFINED*****

 No JavaScript temos o tipo de dados Undefined que representa valores indefinido
 E o tipo de dados null, que são muitas vezes confundidos.
 
 A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, 
 já algo null existe mas não tem valor algum.

 ******OBJECT******

 O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. 
 Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . 
  
  Por exemplo 
  { propriedade: "valor" } 
  { nome: "João", idade: 20 }
  
  ******ARRAY******

  O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados,
  um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

  ----> Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript)   temos 9 tipos
   de dados organizados em 4 categorias: 

 1 / 2 Primitive / Primitive Value: Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt.
 SÃO DADOS IMUTÁVEIS, NÃO SOFREM ALTERAÇAÕES E NÃO SÃO OBJETOS.


 3 Structural são: Object (Array, Map, Set, Date) e Function.
 
 4 Structural Primitive: Além destes, temos o primitivo estrutural que consiste apenas no dado null




###### VARIÁVEIS #######

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

# Tipo dinâmico

O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

# Scope ou var

O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

# Scope let ou const

Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

# Nomeando variáveis 

Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: 

JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações.
Em um nome de variável em JS você pode: 

- Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. 

- Em contraste, você não pode: Iniciar com números e colocar espaços vazios. 

- Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.

##### Declaration assignment var

Para declarar uma variável podemos usar var, let e const, e para atribuírmos valores à essa variável utilizamos o caractere =, e para vermos o tipo dessa variável podemos utilizar a função console.log(typeof variavel).

name = "Mike"

console.log (typeof name)

# Agrupando declarações

É possível agrupar diversas declarações de variáveis em JavaScript usando let, const ou var e colocando uma vírgula entre os nomes das variáveis a serem criadas, por exemplo: let name, age, isStudent.

- Para mostrar mais de uma variável no console.log também é possível usando vírgula, por exemplo: console.log(name, age, isStudent).

# Concatenando e interpolando variáveis

É possível concatenar strings com o operador +, por exemplo: 

console.log('o ' + name + ' tem ' + age + ' anos.') 

Desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. 

Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável, por exemplo:

console.log(O ${name} tem ${age} anos.) 

O resultado deste comando será o mesmo texto do anterior.

#### Criando um objeto

Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos, por exemplo: 

const person = { name: 'John', age: 20 }, para acessar essas propriedades usamos o ".", por exemplo: 
console.log(person.name).

#### Criando um array

Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo:

const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). 

Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

*/

/* *****FUNCTIONS*****
// declaration - declaração da função
// function statement

function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência é persistência")
    console.log("Revisão é a mãe do aprendizado")
}

// executar a função
// rodar, chamar, invocar 
// execute, run, call, invoke

createPhrases()

console.log("fim do programa")

/* *****FUNCTIONS*****

Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código. */

// function expression
// function anonymous

/*
Argumentos e parâmetros

Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

/* parametros (paramters)

const sum = function(number1, number2) {
  console.log(number1 + number2);
}

sum(2, 3)



Retornando valores dentro da função

Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

Function scope

Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

Function Hoisting

O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

Arrow function

Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado }, chamada de Arrow Function.

Callback function

Uma callback function é uma função que está sendo passada para outra função como parâmetro.

Funções construtoras

Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")

Protoype******

O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.


******Type conversion coersion

Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

*****Strings em números

É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().


*****Contando caracteres e digitos

Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

ex:

let word = paralelepipedo
console.log(word.length)
let number = 1234
console.log(String(number).length)

**********Casas decimais

Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

******

Maiúsculas e minúsculas

Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

ex:

let word= "Programar é muito bacana!"
console.log(word.toLowerCase())


******Separando strings

Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

ex: 

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
console.log(myArray)

ou

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore).toLowerCase())


Encontrando palavras em frases

Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

Criando array com construtor

Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

Elementos do Array

Para contar a quantidade de elementos em um array pode-se usar o método length.

Strings para arrays

Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer")

Manipulando arrays

Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

ex:

// add um item no fim 

let techs = ["html", "css", "js"]
techs.push("nodejs")

// add um item no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elemenetos do array
console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1) o primeeiro numero diz respeito a partir de qual index (posição) começar e o segundo número quantos elementos serão removidos

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)


################################

Expressões e operadores
Descrição
Nas próximas aulas, falaremos sobre expressões e operadores.

Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:

let number
Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

let number = 1

(function(){
  console.log('alo')
})()

Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

/* unário */
let number = 1

console.log(++number)

/* binário */
let number = 1

console.log(number + 1)

/* ternário */
console.log(true ? 'alo' : 'nada')

// Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.


// New

// A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

// Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__)

/*

New

A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__)

Typeof delete

Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:

/* delete */
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

console.log(person)
    //Nesse caso estamos deletando a propriedade age do objeto person.

console.log(tyepof "mayk")
    // Aqui vemos qual o tipo de dado que temos, nesse caso uma string.


/*
Operadores aritméticos

Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

/* resto da divisão: sinal % */
let remainder
remainder = 11 % 9
console.log(remainder)

/* incremento: sinal ++ */
let increment = 0

console.log(++increment)
console.log(increment)

/* decremento: sinal -- */
let decrement = 0
decrement--
console.log(decrement)

/* exponencial: sinal ** */
console.log(2 ** 3)

/* Grouping operator

Vamos falar sobre um operador que agrupa expressões, os parênteses.

Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.


Operadores de comparação igual a  ==   e diferente de !=

Operadores de comparação estritamente igual === e estritamente diferente !==  (comparação de valores e tipo de dados)

Operadores de comparação maior > e menor  < e maior igual a >= e menor igual a <=

Operadores de atribuição

Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

Exemplos:

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
// x = x + 2
x += 2

// subtraction assignment (subtração):
// x = x - 2
x -= 1

// multiplication assignment (multiplacação):
// x = x * 2
x *= 2

// division assignment (divisão):
// x = x / 2
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

OPERADORES LÓGICOS - 2 VALORES TIPO BOOLEANO QUE QUANDO VERIFICADOS RETORNAM UM VERDADEIRO OU FALSO -

AND &&
OR ||
NOT !

Operador condicional ternário

Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

Funciona da seguinte forma;

condição ? valor1 : valor2
Exemplo de uso:

// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

Operadores para string

Temos também os string operators, os operadores de string, e nós até já vimos um desses antes, o comparison operator, ou ==, para os mais íntimos.

Agora vamos ver sobre a concatenação, que é o retorno da união de duas strings.

Seu símbolo é o de + (positivo), e seu uso é simples, algo próximo de:

console.log('a' + 'a')
// nesse caso, o retorno da string seria aa.

Falsy e truthy

O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(NaN ? 'verdadeiro' : 'falso')
já o truthy é o oposto, quando um valor é considerado verdadeiro(true) em contextos onde um booleano é obrigatório(condicionais e loops), exemplo a seguir:

    /* 
    	Todos os valores abaixo seriam representados como false em um boolean.
    		true
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
    */

    console.log(Infinity ? 'verdadeiro' : 'falso')

// Precedência dos operadores - Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

/*  De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %=

If e Else
Descrição
Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples, como pode ver a seguir:

if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código.

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}