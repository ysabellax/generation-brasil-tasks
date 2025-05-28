const leia = require('readline-sync');

let numero1, numero2, codigo, operacao;

numero1 = leia.questionFloat('Digite o primeiro numero: ');
numero2 = leia.questionFloat('Digite o segundo numero: ');
codigo = leia.questionFloat('Operacao: ');

    switch (codigo) {
        case 1:
            operacao = numero1 + numero2;
            console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${operacao.toFixed(1)}`);
            break
        case 2:
            operacao = numero1 - numero2;
            console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${operacao.toFixed(1)}`);
            break
        case 3:
            operacao = numero1 * numero2;
            console.log(`${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${operacao.toFixed(1)}`);
            break
        case 4:
            operacao = numero1 / numero2;
            console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${operacao.toFixed(1)}`);
            break
        default:
            console.log(`Operação Inválida`);
    }
