const express = require('express');
const path = require('path');
const cors = require('cors'); // Optional: Menghindari isu CORS
const app = express();
const PORT = 3000;

// Middleware parsing body request (Penting jika nanti ada fitur POST/DELETE)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Mengizinkan request API dari mana saja

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Data Dummy
let books = [
  { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata', genre: 'Novel', authorId: 1 },
  { id: 2, title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', genre: 'Sejarah', authorId: 2 }
];

let authors = [
  { id: 1, name: 'Andrea Hirata', country: 'Indonesia' },
  { id: 2, name: 'Pramoedya Ananta Toer', country: 'Indonesia' }
];

// --- ENDPOINT API JSON (Terekam di Inspect Network & Postman) ---
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/authors', (req, res) => {
  res.json(authors);
});

// Endpoint DELETE (Bonus: Agar fungsi deleteBook() di frontend berjalan tanpa error)
app.delete('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.json({ message: 'Buku berhasil dihapus', books });
});

// --- ROUTE EJS (Render Tampilan Halaman HTML) ---
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/books', (req, res) => {
  res.render('books-list');
});

app.get('/authors', (req, res) => {
  res.render('authors');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});