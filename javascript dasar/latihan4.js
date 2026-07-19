const students = [
  {
    name: "Andi",
    score: 90
  },
  {
    name: "Budi",
    score: 65
  },
  {
    name: "Caca",
    score: 80
  },
  {
    name: "Dina",
    score: 55
  }
];

let lulus = 0;
let tidakLulus = 0;
let totalNilai = 0;

for (let i = 0; i < students.length; i++) {
  let grade = "";

  if (students[i].score >= 90) {
    grade = "A";
  } else if (students[i].score >= 80) {
    grade = "B";
  } else if (students[i].score >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }

  console.log("Nama : " + students[i].name);
  console.log("Nilai : " + students[i].score);
  console.log("Grade : " + grade);
  console.log("");

  if (students[i].score >= 70) {
    lulus++;
  } else {
    tidakLulus++;
  }

  totalNilai += students[i].score;
}

let rataRata = totalNilai / students.length;

console.log("==================");
console.log("Jumlah Siswa : " + students.length);
console.log("Lulus : " + lulus);
console.log("Tidak Lulus : " + "tidakLulus : ")