const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fone: ["5685952", "78641311"],
    dependentes: [
        {
            nome: "Emily",
            parentesco: "nenhum",
            dataNasc: "29/07/2005"}, 
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc: "04/01/2014"
        }
    ], 
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);