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

let relatorio="";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    } else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `;
    }
}

console.log(relatorio);