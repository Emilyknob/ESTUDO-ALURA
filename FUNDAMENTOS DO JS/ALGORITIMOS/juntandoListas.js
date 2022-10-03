const {edFolha, edGalho} = require("./juntanndoListaArr");

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    atual = 0;

    let produtoAtualLista1 = 0;
    let produtoAtualLista2 = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {

        produtoAtualLista1 = lista1[posicaoAtualLista1];
        produtoAtualLista2 = lista2[posicaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }

        atual++;
    }

    while(posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    while(posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(edFolha,edGalho));