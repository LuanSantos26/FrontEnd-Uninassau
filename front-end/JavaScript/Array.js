let arrayMulti = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrayMulti);
console.log(arrayMulti[1][2]);
console.table(arrayMulti[0][0]);
console.table(arrayMulti);

let notas = [
  ["Alex :", 7, 8, 9],
  ["Ana:", 9, 7, 8],
  ["Carlos: ", 5, 6, 7],
];
console.log(notas);
console.log(notas[0][1]);
console.table(notas);
notas.push(["maria:", 8, 9, 10]); //adiciona um novo array
console.table(notas);
notas.splice(1, 2); //remove a partir do índice 1, 2 arrays
console.table(notas);
notas.pop(); //remove o último array
console.table(notas);
