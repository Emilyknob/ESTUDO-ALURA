const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com"
}

console.log(colecionador.nome);

console.log(colecionador["nome"]);

function adicionarTipo(propriedade,tipo){
    
    this[propriedade].push(tipo);
}

for(i = 0; i < 4; i++) {

    colecionador.adicionarTipo("tipocolecao","HQ"+i);
}

console.log(colecionador)