const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, mediaFinal;

nota1 = leia.questionFloat('nota 1: ');
nota2 = leia.questionFloat('nota 2: ');
nota3 = leia.questionFloat('nota 3: ');
nota4 = leia.questionFloat('nota 4: ');

mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;

console.log('Media final: ', mediaFinal.toFixed(1));




