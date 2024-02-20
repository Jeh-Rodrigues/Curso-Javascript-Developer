

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

//console.log(new Pessoa('Jéssica', 30))

const jessica = {
    genero: 'feminino'
}

Pessoa.call(jessica, 'Jéssica', 29)

console.log(jessica)

//jessica.falar()