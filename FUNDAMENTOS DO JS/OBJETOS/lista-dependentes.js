const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fone: ["5685952", "78641311"],
    dependentes: [{
        nome: "Emily",
        parentesco: "nenhum",
        dataNasc: "29/07/2005"
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc: "04/01/2014"
})

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc==="04/01/2014");

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome)