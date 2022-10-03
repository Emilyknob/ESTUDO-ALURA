const user = {
    nome: "Jiliana", 
    email: "jj.@gmail.com",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana", 
    email: "ma.@gmail.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado!")
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();