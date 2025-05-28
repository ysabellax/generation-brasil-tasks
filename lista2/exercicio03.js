const leia = require('readline-sync');

let idade, nome, primeiraDoa;

nome = leia.question('Digite o nome do doador: ');
idade = leia.questionInt('Digite a idade do doador: ');
primeiraDoa = leia.keyInYNStrict('Primeira doacao de sangue? ');

if (idade >= 18 && idade <= 69 ) {
    if (idade < 60) {
        console.log(`${nome} está apto para doar sangue!`);
    }
}
else {
    console.log(`${nome} não está apto para doar sangue!`);
}
if (idade >= 60 && idade <= 69) {
    if (primeiraDoa === true){
        console.log(`${nome} não está apto para doar sangue!`);
    }
    else {
        console.log(`${nome} está apto para doar sangue!`);
    }
}