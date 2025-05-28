const leia = require('readline-sync');

let tipoAnimal = leia.question("invertebrado ou vertebrado: ");

if(tipoAnimal === "vertebrado"){
    tipoAnimal = leia.question("ave ou mamifero? ");
        if(tipoAnimal === "ave"){
            tipoAnimal = leia.question("carnivoro ou onivoro? ");
            if(tipoAnimal === "carnivoro"){
                console.log("Aguia");
            }
            else{
            console.log("Pomba");
            }
        }
        else {
            if(tipoAnimal === "mamifero"){
                tipoAnimal = leia.question("onivoro ou herbivoro? ");
                if(tipoAnimal === "onivoro"){
                    console.log("Homem");
                }
                else{
                    console.log("Vaca");
                }

            }
        }
}
else{
    tipoAnimal = leia.question("inseto ou anelidio? ");
        if(tipoAnimal === "inseto"){
            tipo = leia.question("hematofago ou herbivoro? ");
                if(tipoAnimal === "hematofago"){
                    console.log("Pulga");
                }
                else{
                    console.log("Lagarta");
                }
        }
        else{
            tipoAnimal = leia.question("hematofago ou onivoro? ");
                if(tipoAnimal === "hematofago"){
                    console.log("Sanguessuga");
                }
                else{
                    console.log("Minhoca");
                }
        }
    }

