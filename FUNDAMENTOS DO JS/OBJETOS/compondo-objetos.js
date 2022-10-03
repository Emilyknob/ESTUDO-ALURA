const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fone: ["5685952", "78641311"]
}

cliente.dependentes = {
    nome: "Emily",
    parentesco: "nenhum",
    dataNas: "29/07/2005"
}

console.log(cliente);

cliente.dependentes.nome = "Emily de Oliveira";

console.log(cliente);