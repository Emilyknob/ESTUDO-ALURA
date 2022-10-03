function boasVindas (nome){
    var mensage = "";

    if (nome !== "nome")
        mensage = `Seja Bem vindo ${nome}!`;
    else 
        mensage = "Coloque um nome, essa opção não é valida";
    return mensage;
    
}

console.log(boasVindas("Bruno"));