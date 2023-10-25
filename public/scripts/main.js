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

        this.displayFormData(selectedTipeDriver, selectedTanggal, selectedPickupTime, selectedJumlahPenumpang);
        this.getCarsData(e, selectedTanggal, selectedPickupTime);

        this.resetForm();
    }

    convertTimeToWIB(isoFormatDateTime) {
        const dateObj = new Date(isoFormatDateTime);
        dateObj.setHours(dateObj.getHours() + 7);
        return dateObj;
    }

    async getCarsData(e, inputTanggal, waktuJemput) {
        e.preventDefault();

        const url = 'https://raw.githubusercontent.com/pockypoem/synrgy-challenges/challenge04/data/cars.min.json';
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        // Mengonversi nilai properti "availableAt" menjadi array ["YYYY-MM-DD", "HH:MM"]
        const convertedData = jsonResponse.map(item => {
            const dateObj = this.convertTimeToWIB(item.availableAt);
            const wibDate = dateObj.toISOString().split('T')[0];
            const wibTime = dateObj.toISOString().split('T')[1].slice(0,5);
            return {
                ...item,
                availableAt: [wibDate, wibTime],
            };
        });

        const availableCars = convertedData.filter(car => {
            const [dataDate, dataTime] = car.availableAt;
            const [dataHours, dataMinutes] = dataTime.split(':');

            const [inputHours, inputMinutes] = waktuJemput.split(':');
            
            if(dataDate === inputTanggal) {
                if(inputHours > dataHours) {
                    return true;
                } else if(inputHours === dataHours && inputMinutes >= dataMinutes) {
                    return true;
                }
            }
            return false;
        });
        
        console.log(availableCars);
        

    }

    displayFormData(tipeDriver, tanggal, pickupTime, jumlahPenumpang) {
        console.log('Tipe Driver: ' + tipeDriver);
        console.log('Tanggal: ' + tanggal);
        console.log('Waktu Jemput: ' + pickupTime);
        console.log('Jumlah Penumpang: ' + jumlahPenumpang);
    }

}


const app = new App();

app.init();