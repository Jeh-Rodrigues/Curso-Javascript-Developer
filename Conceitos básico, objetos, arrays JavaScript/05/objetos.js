
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const jessica = new Pessoa('Jéssica', 29);
const leandro = new Pessoa('Leandro', 30);

compararPessoas(jessica, leandro);






/*const jessica = new Pessoa('Jéssica', 29);
const leandro = new Pessoa('Leandro', 30);


jessica.descrever();
leandro.descrever();




/*
const jessica = new Pessoa();
jessica.nome = 'Jéssica Rodrigues';
jessica.idade = 29;

const leandro = new Pessoa();
leandro.nome = 'Leandro dos Santos';
leandro.idade = 30;

console.log(jessica);
console.log(leandro);

jessica.descrever();
leandro.descrever();



/*
const jessica = {
    nome: 'Jéssica Rodrigues Carneiro',
    idade: 29,
    descrever: function () {
        this
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

/*
const atributo = 'nome';

console.log(pessoa[atributo]); /*Recebe de um outro parametro, quando não sabe o nome*/