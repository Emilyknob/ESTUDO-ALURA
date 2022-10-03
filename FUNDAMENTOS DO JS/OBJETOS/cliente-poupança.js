function Cliente(nome,cpf,email,saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente("Andre", "65653214567", "andre@email.com", 100);

console.log(andre);

function clientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup;
    //this.depositarPoup = function(valor) {this.saldoPoup += valor;}
}

const Ju = new clientePoupanca("Juliana", "114646316", "ju@email.com",100,200);

console.log(Ju);

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

Ju.depositarPoup(30);

console.log(Ju.saldoPoup);
