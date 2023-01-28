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