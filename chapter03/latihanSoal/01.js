const X = parseInt(prompt("Masukkan Nominal yang mau ditarik: "));
const Y = parseInt(prompt("Masukkan Jumlah uang dalam rekening: "));
const biayaBank = 0.5;

if (X % 5 === 0 && X <= Y) {
    const saldoAkhir = Y - X - biayaBank;
    console.log("Sisa Saldo: ", saldoAkhir);
} else {
    console.log("Tidak bisa melakukan penarikan");
}