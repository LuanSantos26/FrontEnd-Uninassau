// MATRIZ DE NÚMEROS
let arrayMulti = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arrayMulti); // Exibe a matriz completa
console.log(arrayMulti[1][2]); // Acessa o valor 6 (linha 1, coluna 2)
console.table(arrayMulti[0][0]); // Exibe o valor 1 em formato de tabela
console.table(arrayMulti); // Exibe toda a matriz como tabela

// MATRIZ DE NOTAS
let notas = [
  ["Alex :", 7, 8, 9],
  ["Ana:", 9, 7, 8],
  ["Carlos: ", 5, 6, 7],
];

console.log(notas); // Exibe a matriz de notas
console.log(notas[0][1]); // Acessa a primeira nota de Alex
console.table(notas); // Exibe a matriz como tabela

notas.push(["Maria:", 8, 9, 10]); // .push() adiciona um novo array (linha) ao final da matriz
console.table(notas); // Exibe com Maria incluída

notas.splice(1, 2); // .splice(1, 2) remove 2 elementos a partir do índice 1 → remove Ana e Carlos
notas.splice(0, 1); // .splice(0, 1) remove 1 elemento a partir do índice 0 → remove Alex
console.table(notas); // Exibe após remoções

notas.pop(); // .pop() remove o último elemento do array → remove Maria
console.table(notas); // Exibe matriz final (vazia)

// REINSERINDO DADOS PARA FUNCIONALIDADES AVANÇADAS
notas = [
  ["Alex :", 7, 8, 9],
  ["Ana:", 9, 7, 8],
  ["Carlos: ", 5, 6, 7],
  ["Maria:", 8, 9, 10],
];

// FUNÇÃO PARA CALCULAR MÉDIA
function calcularMedia(notaArray) {
  // .slice(1) pega apenas as notas (sem o nome)
  // .reduce() soma todas as notas
  const soma = notaArray.slice(1).reduce((acc, val) => acc + val, 0);
  return (soma / (notaArray.length - 1)).toFixed(2);
}

// EXIBIR NOME E MÉDIA DE CADA ALUNO
console.log("📊 Médias dos alunos:");
notas.forEach((aluno) => {
  // 🔹 Arrow function usada aqui: aluno => { ... }
  // É uma forma mais curta de escrever function(aluno) { ... }
  const media = calcularMedia(aluno);
  console.log(`${aluno[0]} Média: ${media}`);
});

// ORDENAR ALUNOS POR MÉDIA (MAIOR PARA MENOR)
notas.sort((a, b) => calcularMedia(b) - calcularMedia(a));
// 🔹 Arrow function usada para comparar dois alunos
// Equivalente a: function(a, b) { return calcularMedia(b) - calcularMedia(a); }

console.log("📋 Alunos ordenados por média:");
console.table(notas);

// FUNÇÃO PARA BUSCAR ALUNO PELO NOME
function buscarAluno(nomeBuscado) {
  const aluno = notas.find((aluno) =>
    aluno[0].toLowerCase().includes(nomeBuscado.toLowerCase())
  );
  // 🔹 Arrow function usada dentro do .find()
  // Equivalente a: function(aluno) { return aluno[0].toLowerCase().includes(...); }

  if (aluno) {
    const media = calcularMedia(aluno);
    console.log(
      `🔍 Encontrado: ${aluno[0]} Notas: ${aluno
        .slice(1)
        .join(", ")} Média: ${media}`
    );
  } else {
    console.log("❌ Aluno não encontrado.");
  }
}

buscarAluno("Maria"); // Teste de busca
buscarAluno("Ana"); // Teste de busca
