const leia = require('readline-sync');

let operacao, codigo, valor, saldo = 1000, novoSaldo;

codigo = leia.questionFloat('Operacao: ');
valor = leia.questionFloat('Valor: ');

if (codigo > 0 && codigo < 4) {

    switch (codigo){
        case 1:
            operacao = "Saldo";
            console.log(`\nOperação - ${operacao}`);
            console.log(`Saldo: ${saldo}`);
            break
        case 2:
            operacao = "Saque";
            console.log(`\nOperação - ${operacao}`);
            
            
    }
}

