class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldopoupanca){
        super(nome,email,cpf,saldo)
        this.saldopoupanca = saldopoupanca
    }

    despositarPoupanca(valor){
        this.saldopoupanca += valor
    }
}

const ju = new ClientePoupanca("Ju","juemal.com","45674651",100,200)

console.log(ju)

ju.depositar(50)
ju.despositarPoupanca(50)

console.log(ju)