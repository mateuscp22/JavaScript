const tempLondon = [18, -10, 13, -120, 8, -5, 2, -1];

/* const tempPositive = tempLondon.filter(function (value) {
  return value <= 0;
}); //filtra todos os valores na array */

//filtra todos os valores na array
const tempPositive = tempLondon.filter((value) => value >= 0);

console.log(tempPositive);
