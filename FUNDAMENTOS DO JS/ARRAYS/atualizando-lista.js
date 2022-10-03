console.log(`
atualizando lista
`)

const nomes = ["Paula", "Jose", "Bruna", "Nilce", "Mary", "Jade"];

console.log(`Mostra nomes da lista: ${nomes}`);

nomes.splice(1, 2, "Pricila");

console.log(`Tira o Jose e Bruna da lista e coloca a Pricila: ${nomes}`);

nomes.splice(3, 0, "Antonio");

console.log(`Coloca Antonio entre Nilce e Mary: ${nomes}`);

// Juntando Salas 

console.log(`
Juntando as salas
`)

const salaA = ["Paula", "Jose", "Bruna"];
const salaB = ["Nilce", "Mary", "Jade"];

console.log(`Mostra alunos da sala A: ${salaA}`);
console.log(`Mostra alunos da sala B: ${salaB}`);

const unificada = salaA.concat(salaB);

console.log(`Junta alunos da sala B com alunos da sala A: ${salaB}`);
