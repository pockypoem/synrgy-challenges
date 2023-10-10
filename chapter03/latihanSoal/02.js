const nilaiMahasiswa = parseFloat(prompt("Masukkan Nilai Mahasiswa: "));
const kategori = "E";

if(!(nilaiMahasiswa >= 0 && nilaiMahasiswa <= 100)) {
    return "Nilai harus diantara 0 hingga 100"
}

if (nilaiMahasiswa >= 0 ) {
    if (nilaiMahasiswa >= 91 ) {
        kategori = "A";
    } else if (nilaiMahasiswa >= 81) {
        kategori = "B";
    } else if (nilaiMahasiswa >= 71) {
        kategori = "C";
    } else if (nilaiMahasiswa >= 61) {
        kategori = "D";
    }
}


console.log("Kategori: " + kategori);