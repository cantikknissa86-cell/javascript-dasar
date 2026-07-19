const books = [
  {
    title: "Belajar JavaScript",
    author: "Andi",
    year: 2022,
    available: true
  },
  {
    title: "Dasar HTML",
    author: "Budi",
    year: 2019,
    available: false
  },
  {
    title: "CSS Modern",
    author: "Caca",
    year: 2021,
    available: true
  },
  {
    title: "Node.js",
    author: "Dina",
    year: 2023,
    available: false
  }
];

let tersedia = 0;
let dipinjam = 0;

console.log("=== Seluruh Buku ===");
for (let i = 0; i < books.length; i++) {
  console.log(
    books[i].title +
      " | " +
      books[i].author +
      " | " +
      books[i].year
  );
}

console.log("\n=== Buku Tersedia ===");
for (let i = 0; i < books.length; i++) {
  if (books[i].available) {
    console.log(books[i].title);
    tersedia++;
  } else {
    dipinjam++;
  }
}

console.log("\nJumlah Buku : " + books.length);
console.log("Jumlah Buku Tersedia : " + tersedia);
console.log("Jumlah Buku Dipinjam : " + dipinjam);

console.log("\n=== Buku Terbit Setelah 2020 ===");
for (let i = 0; i < books.length; i++) {
  if (books[i].year > 2020) {
    console.log(books[i].title + " (" + books[i].year + ")");
  }
}