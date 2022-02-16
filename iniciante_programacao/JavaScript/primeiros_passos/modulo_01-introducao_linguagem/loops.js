console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `maceió`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador'
let cont = 0;

while (temPassagemComprada == false) {
    if(listaDeDestinos[cont] == destino) {
        temPassagemComprada = true;
    }
    console.log(listaDeDestinos[cont])
    cont = cont + 1;
}

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
    temPassagemComprada = true;
} else {
    temPassagemComprada = false;
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);