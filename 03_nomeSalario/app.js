const readline = require('readline') //Importando o módulo readline do nodejs para fazer a leitura do terminal

const rl = readline.createInterface({ //Função para criar uma interface de comunicação com o terminal
    input: process.stdin, //define de onde o programa vai ler a entrada
    output: process.stdout, //define onde o programa vai escrever a saída
});

rl.question('Qual seu nome? ' , (nome) => { //função do modulo readline, ela faz perguntas ao usuário direto do terminal para obter uma resposta de forma assincrona.
    rl.question('Quanto você recebe por mês? ' , (salario) =>{
        console.log(`Seu nome é ${nome} e você recebe ${salario} por mês`);
        rl.close()
    })
})