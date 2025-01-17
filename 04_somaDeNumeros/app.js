const readline = require('readline') // Importando o módulo readline para criar uma interface de entrada e saida no terminal

const rl = readline.createInterface({ //função para criar uma interface de entrada e saida pelo terminal
    input: process.stdin, //Define por onde entra os dados, padrão terminal.
    output: process.stdout, //Define por onde vai ser a saída dos dados, padrão terminal.
})

function soma (num1, num2) { // função de somo
    var calculo = num1 + num2;
    return calculo;
}

rl.question('Digite o primeiro número: ', (primeiroNum) => { //meotodo fornecido pela readline do nodejs que permite entrada e saida de dados assincronos.
    const num1 = Number(primeiroNum) //variavel constante transformando o tipo da propriedade do metodo em Number.
    rl.question('Digite o Segundo número: ', (segundoNum) => { //segunda pergunta para o usuario
        const num2 = Number(segundoNum) //variavel constante que converte o tipo da propriedade do metodo
        console.log(soma(num1, num2)) //chamada da função colocando as variaveis convertidas.
        rl.close() //metodo para fechar o programa
    })
})