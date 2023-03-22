const tempLondon = [18, 13, 8, 2];

const tempPositive = tempLondon.every(function (value) {
  return value >= 0;
}); //checa todos os valores na array

console.log(tempPositive);
