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

//parametros (paramters)

const sum = function(number1, number2) {
    console.log(number1 + number2);
}

sum(2, 3)