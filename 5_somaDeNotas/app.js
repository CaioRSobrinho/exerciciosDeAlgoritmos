const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function media(valor1, valor2) {
    const media = (Number(valor1)+ Number(valor2))/2
    return media;
}

function pergunta(){
    rl.question('Digita a nota 1: ', (nota1) => {
        if(isNaN(Number(nota1)) || Number(nota1) < 10.0 || Number(nota1) > 0.0){
            console.log('Nota inválida')
            console.log(typeof nota1)
            pergunta()
        }
        else { 
                rl.question('Digite a nota 2: ', (nota2) =>{
                console.log(media(nota1, nota2))
                rl.close()
            })
        }
    })
}

pergunta()