console.log("Perfumaria");

function fazendoCompras (produtos, carrinho){

    let produtoExite = false;
    let mensagem = "Produto não Existente";

    for (let i = 0; i < produtos.length; i++){
        if(produtos[i] === carrinho){
            produtoExite = true;
        } if(produtoExite == true) {
            mensagem = "Item Adicionado ao Carrinho!";
        } 
    }
    return mensagem;
}


console.log(fazendoCompras(["Base", "Creme para rosto", "Sabonete ", "Corretivo", "Delineador"], "Corretivo"));




