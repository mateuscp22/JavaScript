const num = [7, 8, 9,]

num.push(10, 11, 12) // fim do array
num.unshift(1, 2, 3) // inicio do array
num.splice(3, 0, 4, 5, 6) //posição , deletar?: 1 (sim), 0(não), numeros

console.log(num)