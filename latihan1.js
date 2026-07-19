const student = {
  nama: "Budi",
  umur: 20,
  jurusan: "Teknik Informatika",
  sudahLulus: false,
  hobi: ["Gaming", "Membaca", "Ngoding"]
};
console.log("Nama         :", student.nama);
console.log("Umur         :", student.umur);
console.log("Jurusan      :", student.jurusan);
console.log("Status Lulus :", student.sudahLulus ? "Sudah" : "Belum");
console.log("Hobi:");

for (let i = 0; i < student.hobi.length; i++) {
  console.log(`${i + 1}. ${student.hobi[i]}`);
}