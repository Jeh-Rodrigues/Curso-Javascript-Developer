const pessoa = {
    genero: 'feminino'
}

/* pessoa.__proto__ 
Através de objetos instanciados usamos o __proto__
Através das funções construtoras usamos o prototype*/

  const jessica = {
    nome: 'Jéssica',
    __proto__: pessoa
}

//const jessica = Object.create(pessoa)

jessica.nome = 'Jéssica'

console.log(jessica.genero)