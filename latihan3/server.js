const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());

// Data Dummy Utama (Menggunakan let agar data bisa diubah/dihapus)
let authors = [
    { id: 1, name: "Robert C. Martin", country: "USA" },
    { id: 2, name: "James Clear", country: "USA" },
    { id: 3, name: "Marijn Haverbeke", country: "Netherlands" },
    { id: 4, name: "Andrea Hirata", country: "Indonesia" }
];

let books = [
    { id: 1, title: "Clean Code", authorId: 1, year: 2008, available: true },
    { id: 2, title: "Atomic Habits", authorId: 2, year: 2018, available: false },
    { id: 3, title: "Eloquent JavaScript", authorId: 3, year: 2018, available: true },
    { id: 4, title: "Laskar Pelangi", authorId: 4, year: 2005, available: true }
];

// Route Utama untuk Tampilan EJS
app.get('/', (req, res) => {
    res.render('index', { authors, books });
});

// --- ENDPOINT HAPUS (DELETE) ---
app.delete('/api/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    authors = authors.filter(a => a.id !== id);
    res.json({ message: "Author berhasil dihapus" });
});

app.delete('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(b => b.id !== id);
    res.json({ message: "Buku berhasil dihapus" });
});

// --- ENDPOINT EDIT (PUT) ---
app.put('/api/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const author = authors.find(a => a.id === id);
    if (author) {
        author.name = req.body.name || author.name;
        author.country = req.body.country || author.country;
        res.json({ message: "Author berhasil diperbarui" });
    } else {
        res.status(404).json({ message: "Author tidak ditemukan" });
    }
});

app.put('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        book.title = req.body.title || book.title;
        book.year = req.body.year || book.year;
        res.json({ message: "Buku berhasil diperbarui" });
    } else {
        res.status(404).json({ message: "Buku tidak ditemukan" });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
