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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);

    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente);

console.log(Object.values(cliente));

console.log(Object.entries(cliente));