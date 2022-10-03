const alunos = ["Bruna", "Nilce", "Mary", "Jade"];
const media = [10, 8, 7, 6];

let listaDeNotasAlunos = [alunos, media];

function exibeNomeNota (nomeDoAluno) {
    if(listaDeNotasAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno);
        return `${listaDeNotasAlunos[0][indice]},sua media é ${listaDeNotasAlunos[1][indice]}`
    } else {
        return `Aluno não cadastrado`;
    }
}

console.log(exibeNomeNota("Mary"));

console.log(exibeNomeNota("nemo"));