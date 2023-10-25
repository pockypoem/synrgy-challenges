class App {
    constructor() {
        
        this.formElements = {
            tipeDriver : document.getElementById("driverType"),
            tanggal : document.getElementById("date"),
            pickupTime : document.getElementById("pickupTime"),
            jumlahPenumpang : document.getElementById("passengers"),
        }

        this.tombolCariMobil = document.querySelector('button[type="submit"]')

        this.filterResultSection = document.getElementById('filterResults');

        this.formElements.jumlahPenumpang.addEventListener("input", () => {
            if (parseInt(this.formElements.jumlahPenumpang.value) > 6) {
                this.formElements.jumlahPenumpang.value = "6";
            }
        });
    }

    init() {
        for(const key in this.formElements) {
            this.formElements[key].addEventListener("input", this.validateForm.bind(this))
        }

        this.tombolCariMobil.addEventListener('click', this.handleFormSubmit.bind(this));
    }

    resetForm() {
        for (const key in this.formElements) {
            this.formElements[key].value = '';
        }
    }

    validateForm() {
        const selectedTipeDriver = this.formElements.tipeDriver.value;
        const selectedTanggal = this.formElements.tanggal.value;
        const selectedPickupTime = this.formElements.pickupTime.value;
        const selectedJumlahPenumpang = this.formElements.jumlahPenumpang.value;

        if(selectedTipeDriver && selectedTanggal && selectedPickupTime && selectedJumlahPenumpang) {
            document.getElementById("searchButton").removeAttribute("disabled");
        } else {
            document.getElementById("searchButton").setAttribute("disabled", "disabled");
        }
    }


    handleFormSubmit(e) {
        e.preventDefault();

        const selectedTipeDriver = this.formElements.tipeDriver.value;
        const selectedTanggal = this.formElements.tanggal.value;
        const selectedPickupTime = this.formElements.pickupTime.value;
        const selectedJumlahPenumpang = this.formElements.jumlahPenumpang.value;

        this.getCarsData(e, selectedTanggal, selectedPickupTime, selectedJumlahPenumpang);

        this.resetForm();

        this.tombolCariMobil.setAttribute("disabled", "disabled");
    }

    convertTimeToWIB(isoFormatDateTime) {
        const dateObj = new Date(isoFormatDateTime);
        dateObj.setHours(dateObj.getHours() + 7);
        return dateObj;
    }

    async getCarsData(e, inputTanggal, waktuJemput, jumlahPenumpang) {
        e.preventDefault();

        const url = 'https://raw.githubusercontent.com/pockypoem/synrgy-challenges/challenge04/data/cars.min.json';
        const response = await fetch(url);
        const jsonResponse = await response.json();
        

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
            const dataCapacity = car.capacity;
            const [dataHours, dataMinutes] = dataTime.split(':');

            const [inputHours, inputMinutes] = waktuJemput.split(':');
            
            if(dataDate === inputTanggal) {
                if(dataCapacity >= jumlahPenumpang) {
                    if(inputHours > dataHours) {
                        return true;
                    } else if(inputHours === dataHours && inputMinutes >= dataMinutes) {
                        return true;
                    }
                }
                return false;
            }
            return false;
        });
        
        this.viewResult(availableCars);
        
    }

    formatCurrencyID(priceRent) {
        const formattedCurrency = priceRent.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        });

        return formattedCurrency;
    }

    viewResult(cars) {
        this.filterResultSection.innerHTML = ''; // reset UI
        const maxCardsPerRow = 3;
        for (let i = 0; i < cars.length; i += maxCardsPerRow) {
            const row = document.createElement('div');
            row.classList.add('row', 'mt-3');

            for (let j = i; j < i + maxCardsPerRow && j < cars.length; j++) {
                const car = cars[j];
                const imageURL = car.image;
                const carType = car.type;
                const description = car.description;
                const capacity = car.capacity;
                const transmission = car.transmission;
                const carYear = car.year;
                const carPriceRent = this.formatCurrencyID(car.rentPerDay);

                const cardHTML =
                    `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top" src="${imageURL}" alt="Card image cap" style="height: 270px; width: 100%;">
                                <div class="mt-3">
                                    <h5 class="card-title">${carType}</h5>
                                    <h3><b>${carPriceRent} /hari</b></h3>
                                    <p class="card-text" style="margin-bottom: 20px;">${description}</p>
                                    <div class="penumpang d-flex">
                                        <img src="https://i.ibb.co/SrMTbBZ/icon-penumpang.png" alt="icon-penumpang" border="0" style="width: 25px; height: 25px;">
                                        <p class="ms-3">${capacity} orang</p>
                                    </div>
                                    <div class="settings d-flex">
                                        <img src="https://i.ibb.co/n3MNDF5/icon-settings.png" alt="icon-settings" border="0" style="width: 25px; height: 25px;">
                                        <p class="ms-3">${transmission}</p>
                                    </div>
                                    <div class="carYear d-flex">
                                        <img src="https://i.ibb.co/Sy9GJgm/fi-calendar.png" alt="fi-calendar" border="0" style="width: 25px; height: 25px;">
                                        <p class="ms-3">Tahun ${carYear}</p>
                                    </div>
                                    <a href="#" class="btn btn-green btn-block" style="margin-top: 20px; width: 100%; text-align:center;">Pilih Mobil</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

                row.innerHTML += cardHTML;
            }

            this.filterResultSection.appendChild(row);
        }
    }


}


const app = new App();

app.init();