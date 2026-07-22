const input = document.getElementById("nama_buku");
const btnTambah = document.getElementById("tambah");
const list = document.querySelector(".data-buku");

// Ambil data dari localStorage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Simpan ke localStorage
function simpanData() {
    localStorage.setItem("books", JSON.stringify(books));
}

// Tampilkan data
function tampilkanData() {
    list.innerHTML = "";

    books.forEach((book, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${book}
            <button onclick="editBuku(${index})">Edit</button>
            <button onclick="hapusBuku(${index})">Hapus</button>
        `;

        list.appendChild(li);
    });
}

// Tambah data
btnTambah.addEventListener("click", () => {
    const nama = input.value.trim();

    if (nama === "") {
        alert("Nama buku tidak boleh kosong!");
        return;
    }

    books.push(nama);

    simpanData();
    tampilkanData();

    input.value = "";
});

// Edit data
function editBuku(index) {
    const namaBaru = prompt("Edit nama buku:", books[index]);

    if (namaBaru !== null && namaBaru.trim() !== "") {
        books[index] = namaBaru.trim();

        simpanData();
        tampilkanData();
    }
}

// Hapus data
function hapusBuku(index) {
    const yakin = confirm("Yakin ingin menghapus buku ini?");

    if (yakin) {
        books.splice(index, 1);

        simpanData();
        tampilkanData();
    }
}

// Tampilkan saat halaman dibuka
tampilkanData();