const leia = require('readline-sync');

let n1, n2, n3, n4, diferença;

n1 = leia.questionFloat('numero 1: ');
n2 = leia.questionFloat('numero 2: ');
n3 = leia.questionFloat('numero 3: ');
n4 = leia.questionFloat('numero 4: ');

diferença = (n1 * n2)-(n3 * n4);

console.log('Diferença: ', diferença);
