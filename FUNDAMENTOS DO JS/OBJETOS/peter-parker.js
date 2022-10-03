const vingadores = {
    nome: "Peter Parker",
    idade: 19,
    profissao: "fotografo",
    tempoLivre: "Homen-aranha"
}

console.log(vingadores);

vingadores.pertenceAAvengers = "Não";

console.log(vingadores);

delete vingadores.profissao;

console.log(vingadores);

console.log(vingadores.tempoLivre.substring(6,12));