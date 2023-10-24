class App {
    constructor() {
        this.tipeDriver = document.getElementById("driverType");
        this.tanggal = document.getElementById("date");
        this.pickupTime = document.getElementById("pickupTime");
        this.jumlahPenumpang = document.getElementById("passengers");
        this.tombolCariMobil = document.querySelector('button[type="submit"]');

        this.jumlahPenumpang.addEventListener("input", () => {
            if (parseInt(this.jumlahPenumpang.value) > 8) {
                this.jumlahPenumpang.value = "8";
            }
        });
    }

    init() {
        this.tombolCariMobil.addEventListener('click', this.handleFormSubmit.bind(this));
    }

    resetForm() {
        this.tipeDriver.value = '';
        this.tanggal.value = '';
        this.pickupTime.value = '';
        this.jumlahPenumpang.value = '';
    }


    handleFormSubmit(e) {
        e.preventDefault();

        const selectedTipeDriver = this.tipeDriver.value;
        const selectedTanggal = this.tanggal.value;
        const selectedPickupTime = this.pickupTime.value;
        const selectedJumlahPenumpang = this.jumlahPenumpang.value;


        console.log('Tipe Driver: ' + selectedTipeDriver);
        console.log('Tanggal: ' + selectedTanggal);
        console.log('Waktu Jemput: ' + selectedPickupTime);
        console.log('Jumlah Penumpang: ' + selectedJumlahPenumpang);

        this.resetForm();
    }

}


const app = new App();

app.init();