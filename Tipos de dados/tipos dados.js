
/*
    boolean
    null
    undefined
    number
    string
    synbol
*/

// object

/* pode ser atribuída a qualquer momento, até no tipo

let x = 10;
x = 'texto';
*/

//Comparação iguais 
//console.log(10 == "10") /*Despreza o tipo*/
//console.log(10 === "10") /*Considera o tipo*/

//Comparação diferentes
//console.log(10 != "10") 
//console.log(10 !== "10")

/*Boolean
 true | false

const nome = '';

if (nome) {
console.log('preenchido')
}

console.log(!!'');*/

/*Null (ausencia de valor)
Undefined (ausencia de declaração)

const x = null;
let y;

console.log(y);

const x = { nome: null };

console.log(JSON.stringify(x));

//+Infinity -Infinity e NaN
// Double Precision 65-bit binary format IEEE 754 (pode conter falhas de arredondamento) (solução é usar o decimal.js - biblioteca que soluciona o problema)
*/

/*String

const id = 20;

console.log('<div id="' + id + '">teste<div>');
console.log(`<div id="${id}">teste<div>`); //(possibilita quebra de linha da string)
*/

/*Synbol

const x = Symbol('10'); //(imutável | Único)

console.log(x);
*/

/*Objetos
const x = {
    nome: "Jéssica",
    idade: 29,
    falar: function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

x.falar()


x['nome'] = 'Jéh'

console.log(x.nome)
console.log(x['nome'])*/

