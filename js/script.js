console.log("CV Online siap");

const namaLengkap = "Nabila Slavina hapsari";
    console.log(namaLengkap);

let tahunMasuk = 2022;
    console.log("Sebelum diubah:", tahunMasuk);
    tahunMasuk = 2023;
    console.log("Sesudah diubah:", tahunMasuk);    

let jurusan = "Rekam Medis";
const semester = 6;
let statusAktif = true;
    console.log(jurusan);
    console.log(semester);
    console.log(statusAktif);

function sapaPengunjung() {
    console.log("Selamat datang di CV saya");
}
sapaPengunjung();

function hitungUmur(tahunLahir) {
    return 2025 - tahunLahir;
}
    console.log(hitungUmur(2004));

let skills = ["HTML", "CSS", "JavaScript"];
    console.log(skills[0]);

skills.push("Tailwind CSS");
console.log(skills.length);
console.log(skills);