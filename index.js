const num = [1, 2, 3, 4, 5, 6, 7, 8]
const final0 = num.pop() // remove ultimo item na array
const final1 = num.shift() // remove o primeiro item na array
const final2 = num.splice(2, 1) // a partir do index "x" remova "y" item(s)

console.log(num)
console.log(final0)
console.log(final1) 
console.log(final2)