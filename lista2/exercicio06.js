const leia = require('readline-sync');

let nome, cargo, salario, novoSalario, codigoCargo, reajuste;

nome = leia.question('Nome do colaborador: ');
codigoCargo = leia.questionInt('Cargo: ');
salario = leia.questionInt('Salario: ');

    switch (codigoCargo){
        case 1:
            cargo = "Gerente";
            reajuste = (10/100);
            novoSalario = salario + (reajuste * salario);
            break
        case 2:
            cargo = "Vendedor";
            reajuste = (7/100);
            novoSalario = salario + (reajuste * salario);
            break
        case 3: 
            cargo = "Supervisor";
            reajuste =  (9/100);
            novoSalario = salario + (reajuste * salario);
            break
        case 4:
            cargo = "Motorista";
            reajuste = (6/100);
            novoSalario = salario + (reajuste * salario);
            break
        case 5: 
            cargo = "Estoquista";
            reajuste = (5/100);
            novoSalario = salario + (reajuste * salario);
            break
        case 6:
            cargo = "Técnico de TI"
            reajuste = (8/100);
            novoSalario = salario + (reajuste * salario);     
            break
        default:
            console.log("Digite um número válido de 1 a 6!");
            return

    }

console.log("=============================")
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(novoSalario)}`);


