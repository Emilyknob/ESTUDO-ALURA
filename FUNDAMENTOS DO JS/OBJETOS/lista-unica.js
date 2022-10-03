const cliente = [
    {
        nome:"Andre",
        cpf:"123456789",
        dependentes: [{
            nome: "Emily",
            parentesco: "nenhum",
            dataNasc: "29/07/2005"
        },
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc: "04/01/2014"
        }],
        },
        { 
        nome:"Juliana", 
        cpf:"7589645345",
        dependentes: [{
            nome:"Sophia",
            parentesco:"filha",
            dataNasc:"30/08/2020"
        }],
    }
]
    
const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];

console.table(listaDependentes);


