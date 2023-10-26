class App {
    constructor() {
        this.formElements = {
            tipeDriver: document.getElementById("driverType"),
            tanggal: document.getElementById("date"),
            pickupTime: document.getElementById("pickupTime"),
            jumlahPenumpang: document.getElementById("passengers"),
        };

        this.tombolCariMobil = document.querySelector('button[type="submit"]');

        this.filterResultSection = document.getElementById('filterResults');
        this.carComponent = new Car(this.filterResultSection); 

        this.formElements.jumlahPenumpang.addEventListener("input", () => {
            if (parseInt(this.formElements.jumlahPenumpang.value) > 6) {
                this.formElements.jumlahPenumpang.value = "6";
            }
        });
    }

    init() {
        for (const key in this.formElements) {
            this.formElements[key].addEventListener("input", this.validateForm.bind(this));
        }

        this.tombolCariMobil.addEventListener('click', this.handleFormSubmit.bind(this));
    }

    // resetForm() {
    //     for (const key in this.formElements) {
    //         this.formElements[key].value = '';
    //     }
    // }

    validateForm() {
        const selectedTipeDriver = this.formElements.tipeDriver.value;
        const selectedTanggal = this.formElements.tanggal.value;
        const selectedPickupTime = this.formElements.pickupTime.value;
        const selectedJumlahPenumpang = this.formElements.jumlahPenumpang.value;

        if (selectedTipeDriver && selectedTanggal && selectedPickupTime && selectedJumlahPenumpang) {
            document.getElementById("searchButton").removeAttribute("disabled");
        } else {
            document.getElementById("searchButton").setAttribute("disabled", "disabled");
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const selectedTanggal = this.formElements.tanggal.value;
        const selectedPickupTime = this.formElements.pickupTime.value;
        const selectedJumlahPenumpang = this.formElements.jumlahPenumpang.value;

        this.getCarsData(selectedTanggal, selectedPickupTime, selectedJumlahPenumpang);
    }

    convertTimeToWIB(isoFormatDateTime) {
        const dateObj = new Date(isoFormatDateTime);
        dateObj.setHours(dateObj.getHours() + 7);
        return dateObj;
    }

    async getCarsData(inputTanggal, waktuJemput, jumlahPenumpang) {
        const url = 'https://raw.githubusercontent.com/pockypoem/synrgy-challenges/challenge04/data/cars.min.json';
        const response = await fetch(url);
        const jsonResponse = await response.json();

        // Mengonversi nilai properti "availableAt" menjadi array ["YYYY-MM-DD", "HH:MM"]
        const convertedData = jsonResponse.map(item => {
            const dateObj = this.convertTimeToWIB(item.availableAt);
            const wibDate = dateObj.toISOString().split('T')[0];
            const wibTime = dateObj.toISOString().split('T')[1].slice(0, 5);
            return {
                ...item,
                availableAt: [wibDate, wibTime],
            };
        });

        this.carComponent.render(convertedData, inputTanggal, waktuJemput, jumlahPenumpang);

        // this.resetForm();
        this.tombolCariMobil.setAttribute("disabled", "disabled");
    }
}

const app = new App();
app.init();