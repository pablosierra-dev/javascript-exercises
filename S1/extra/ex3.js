const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
let short = [];
let med = [];
let large = [];

for (let index = 0; index < movies.length; index++) {
  const movie = movies[index];
  if (movie.durationInMinutes <= 100) {
    short.push(movie);
}
else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
  med.push(movie);
}
else if (movie.durationInMinutes > 200) {
  large.push(movie);
}
}
console.log(short);
console.log(med)
console.log(large)
