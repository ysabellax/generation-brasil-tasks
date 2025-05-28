const leia = require('readline-sync');

let total, codigo, quantidade;

codigo = leia.questionInt('Codigo do Produto: ');
quantidade = leia.questionInt('Quantidade do Produto: ');

    switch (codigo) {
        case 1: 
            total = quantidade * 10.00
            console.log("\nProduto: Cachorro Quente")
            console.log(`Valor Total: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)}`);
            break
        case 2:
            total = quantidade * 15.00
            console.log("\nProduto: X-Salada")
            console.log(`Valor Total: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)}`);
            break
        case 3: 
            total = quantidade * 18.00
            console.log("\nProduto: X-Bacon")
            console.log(`Valor Total: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)}`);
            break
        case 4:
            total = quantidade * 12.00
            console.log("\nProduto: Bauru")
            console.log(`Valor Total: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)}`);
            break
        case 5:
            total = quantidade * 8.00
            console.log("\nProduto: Refrigerante")
            console.log(`Valor Total: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)}`);
            break
        case 6: 
            total = quantidade * 13.00
            console.log("\nProduto: Suco de Laranja")
            console.log(`Valor Total: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)}`);
            break
        default:
            console.log("Digite um código de 1 a 6!")
}