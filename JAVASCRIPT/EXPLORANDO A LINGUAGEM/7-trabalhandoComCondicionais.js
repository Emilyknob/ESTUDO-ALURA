console.log(`Trabalhando com Condicionais`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1,1); //removendo item
} else {
        console.log("Comprador não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else {
    console.log("Você não pode ebarcar");
}

//if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// } else if(estaAcompanhada){
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); //removendo item
//     } else {
//         console.log("Comprador não é maior de idade e não posso vender");
// }


console.log(listaDeDestinos);

