
/*
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));
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