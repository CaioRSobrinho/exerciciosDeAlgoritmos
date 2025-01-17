const readLine = require('readline'); //Importação do modulo readline para interagir com o usuario pelo terminal

const rl = readLine.createInterface({  //função para criação da interface
    input: process.stdin, //Define de onde o programa vai ler a entrada, entrada padrão é pelo terminal
    output: process.stdout, //Define onde a saída sera escrita, saída padrão é pelo terminal
});

rl.question('Digite seu nome:', (nome) => {  // metodo question para perguntar algo no terminal e esperar o usuário digitar uma resposta.
    console.log(`Seja bem vindo ${nome}`)
    rl.close() //encerramento do programa
});