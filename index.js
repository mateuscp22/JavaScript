/*            arguments */
function price(/* a, b */) {
  /* return a + b */
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(price(10, 20, 40, 50));
