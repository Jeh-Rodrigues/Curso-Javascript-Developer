class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Jéssica'), new Pessoa('Luíza'), new Pessoa('Leandro')]

//const listaNomes = lista.map((Element) => Element.name)

//Elemento html
const listaNomes = lista.map((Element) => {
    return `
        <li>
        ${Element.name}
        </li>
    `
})

console.log(listaNomes)