const nomes = ["Paula", "Jose", "Bruna", "Nilce", "Mary", "Jade"];

console.log(`Mostra os nomes dos alunos ${nomes}`);

const salaA = nomes.slice(0, nomes.length/3); 
const salaB = nomes.slice(nomes.length/3, nomes.length/3 * 2);
const salaC = nomes.slice(nomes.length/3 * 2);

console.log(`Mostra os nomes dos alunos da sala A ${salaA}`);

console.log(`Mostra os nomes dos alunos da sala B ${salaB}`);

console.log(`Mostra os nomes dos alunos da sala C ${salaC}`)