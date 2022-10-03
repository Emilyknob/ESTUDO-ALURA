const notas = [7, 10, 8, 6.5];

console.log(`Notas ${notas}`);

notas.pop();

console.log(`Tira a ultima nota ${notas}`);

notas.push(9);

console.log(`Coloca a nota 9: ${notas}`);

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`Media dos alunos ${media}`);