/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
    Crie um mpetidi que a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }


    calcularGasto(distancia, preco) {
        return distancia * this.gastoMedio * preco;
    }
}

const palio = new Carro('FIAT', 'BRANCO', 1 / 9);

console.log(palio.calcularGasto(130, 3.5));