// First Class Functions
// Higher Order Functions

// Uma função, ela pode ser atribuída a uma variável e ela pode ser passada como parâmetro, e também, ser passada como resposta.
// Para invocar uma foução precisamos da referência dela.

/*function falarMeuNome() {
    console.log('Meu nome é Jéssica')
}

const referenciaNova = falarMeuNome

referenciaNova()

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Rodrigues Carneiro')
}

falarMeuNomeCompleto(falarMeuNome)*/

/*function nomeDaFuncao() {
    console.log('nomeDaFuncao')
}

const nomeDeOutraFuncao = function() {
    console.log('nomeDaOutraFuncao')
}

nomeDaFuncao()
nomeDeOutraFuncao()*/

//Isola todo o código da função
function funcao1() {
    console.log(this)
}

//Não isola o código da função
const funcao2 = () => {
    console.log(this)
}

const jessica = {
    nome: 'Jéssica',
    funcao1,
    funcao2
}

jessica.funcao1()
jessica.funcao2()



