const tipeDriver = document.getElementById("driverType");
const tanggal = document.getElementById("date");
const pickupTime = document.getElementById("pickupTime");
const jumlahPenumpang = document.getElementById("passengers");


const tombolCariMobil = document.querySelector('button[type="submit"]');

const resetFieldForms = () => {
    tipeDriver.value = '';
    tanggal.value = '';
    pickupTime.value = '';
    jumlahPenumpang.value = '';
}

tombolCariMobil.addEventListener('click', function(e) {

    e.preventDefault();

    const selectedTipeDriver = tipeDriver.value;
    const selectedTanggal = tanggal.value;
    const selectedPickupTime = pickupTime.value;
    const selectedJumlahPenumpang = jumlahPenumpang.value;


    console.log('Tipe Driver: ' + selectedTipeDriver);
    console.log('Tanggal: ' + selectedTanggal);
    console.log('Waktu Jemput: ' + selectedPickupTime);
    console.log('Jumlah Penumpang: ' + selectedJumlahPenumpang);

    resetFieldForms();

});