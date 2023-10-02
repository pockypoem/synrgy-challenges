const nilaiMahasiswa = parseFloat(prompt("Masukkan Nilai Mahasiswa: "));

if (nilaiMahasiswa >= 91 && nilaiMahasiswa <= 100) {
    console.log("Kategori: A");
} else if (nilaiMahasiswa >= 81 && nilaiMahasiswa <= 90) {
    console.log("Kategori: B");
} else if (nilaiMahasiswa >= 71 && nilaiMahasiswa <= 80) {
    console.log("Kategori: C");
} else if (nilaiMahasiswa >= 61 && nilaiMahasiswa <= 70) {
    console.log("Kategori: D");
} else {
    console.log("Kategori: E");
}