/* 2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saude para dar
uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabeka abaixo;

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obesidade;
- Acima de 40 Obesidade Grave;
*/

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(IMC) {
    if (IMC <18.5){
       return ('Abaixo do peso!');
    } else if (IMC >=18.5 && IMC <25){
        return ('Peso Normal!');
    } else if (IMC >=25 && IMC <30){
        return ('Acima do peso!');
    } else if (IMC >=30 && IMC >40){
        return ('Obesidade!');
    } else {
        return ('Obesidade grave!');
    }
}

// Main
(function () {
const peso = 62;
const altura = 1.59;

const IMC = calcularImc(peso, altura);
console.log(classificarImc(IMC));
})();



