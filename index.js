let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor;
// let podeVotar = temIdadeMinima || temTituloEleitor;

console.log('Pode votar: ' + podeVotar)

let podeViajar = !podeVotar;
console.log('Pode viajar: ' + podeViajar)

// Operadores logicos
// and = &&
// or = ||
// not = !
