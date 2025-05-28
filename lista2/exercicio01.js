const leia = require('readline-sync');

let a, b, c;

a = leia.questionInt('Digite o numero A: ');
b = leia.questionInt('Digite o numero B: ');
c = leia.questionInt('Digite o numero C: ');

let soma = a + b;

if (a + b > c){
    console.log(`\n${a} + ${b} = ${soma} > ${c}`);
    console.log("A Soma de A + B é maior do que C");
} else if (a + b < c){
    console.log(`\n${a} + ${b} = ${soma} < ${c}`);
    console.log("A Soma de A + b é menor do que C");
} else {
    console.log(`\n${a} + ${b} = ${soma} = ${c}`);
    console.log("A Soma de A + B é igual a C");
}


