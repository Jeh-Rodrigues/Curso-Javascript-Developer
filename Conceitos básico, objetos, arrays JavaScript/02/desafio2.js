/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem.
Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanol = 2.99;
const gasolina = 5.09;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 8.5;
const distancia = 130;

const litrosConsumidos = distancia / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * etanol;
    console.log(valorGasto.toFixed(2));
} else { 
    const valorGasto = litrosConsumidos * gasolina;
    console.log(valorGasto.toFixed(2));
}
