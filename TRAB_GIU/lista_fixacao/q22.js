function melhorAluno(objAlunos){
    let bestName = null;
    let bestAvg = 0;

  for (const [name, grades] of Object.entries(objAlunos)) {
    if (!Array.isArray(grades) || grades.length === 0) continue;
    const sum = grades.reduce((acc, val) => acc + val, 0);
    const avg = sum / grades.length;

    if (avg > bestAvg) {
      bestAvg = avg;
      bestName = name;
    }
  }

  return bestAvg + ' ' + bestName;
}

//test

let alunos = {
    "João": [7, 8, 6, 5],
    "Maria": [9, 6, 8, 7],
    "Pedro": [6, 5, 7, 8]
};

let boaFella = melhorAluno(alunos);
console.log("Melhor aluno: " + boaFella); // Deve exibir: "Melhor aluno: Maria"