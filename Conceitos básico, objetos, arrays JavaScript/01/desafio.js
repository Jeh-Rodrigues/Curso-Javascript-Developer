/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.*/


const combustivel = 3.49;
const gasto = 8;
const distancia = 120;

const litrosConsumidos = distancia / gasto;
const valorGasto = litrosConsumidos * combustivel;

console.log (valorGasto.toFixed(2));

