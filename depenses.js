// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depenses = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((somme, depense) => somme + depense, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((depense) => depense > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
function copieTriee(depenses) {
  return [...depenses].sort((a, b) => a - b);
}
console.log("Tableau avant tri :", depenses.join(", "));
const triees = copieTriee(depenses);                   // number[], FCFA
console.log("Tableau après tri :", triees.join(", "));
const total = calculerTotal(depenses);                 // number, FCFA
const moyenne = calculerMoyenne(depenses);             // number, FCFA/jour
const grandes = filtrerGrossesDepenses(depenses);      // number[], FCFA
const maximum = trouverMaximum(depenses);               // number, FCFA

console.log("===== BILAN DES DÉPENSES DE LA SEMAINE =====");
console.log("");
console.log(`Tableau initial (avant tri) : ${depenses.join(", ")}`);
console.log(`Total : ${total} FCFA`);
console.log(`Moyenne par jour : ${moyenne.toFixed(2)} FCFA`);
console.log(`Dépenses au-dessus de 2000 FCFA : ${grandes.join(", ")}`);
console.log(`Maximum : ${maximum} FCFA`);
console.log(`Copie triée : ${triees.join(", ")}`);
console.log(`Tableau initial (après tri) : ${depenses.join(", ")}`);