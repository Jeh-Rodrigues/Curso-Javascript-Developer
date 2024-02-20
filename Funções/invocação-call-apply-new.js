//Invocação Direta, Call, Apply e Operador New

const pessoa = {
    nome: 'Jéssica',
    idade: 29
}


function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

//gritar() - Invocação direta

gritar.apply(pessoa, ['Olaaaa']) //Contexto

gritar.call(pessoa, 'Olaaaa') //Argumentos

// new - Passando um objeto p/ função e retornando o objeto