const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];
total = 0;
for (let index = 0; index < products.length; index++) {
  const count = products[index];
  total += count.sellCount;
}
console.log(total)