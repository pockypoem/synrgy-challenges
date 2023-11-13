# Pre-Test Chapter 06

#### Q1. Ketika kita menggunakan design pattern MVC, dimanakah kita akan menulis kode yang digunakan untuk memverifikasi data request yang masuk dalam sebuah HTTP Request?
- \[ ] Model
- \[x] Controller
- \[ ] View

#### Q2. Komponen manakah yang digunakan untuk menulis definisi dari UI atau data yang akan direpresentasikan ke client?
- \[ ] Model
- \[ ] Controller
- \[x] View

#### Q3. Apa kegunaan dari repository?
- \[x] Mengabstraksi entity framework (sequelize) agar lebih straight forward
- \[ ] Mengurus logika bisnis dari sebuah fitur
- \[ ] Memvalidasi request yang masuk

#### Q4. Manakah pernyataan di bawah ini yang benar?
- \[ ] Yang boleh mengakses repository hanya controller saja
- \[x] Ketika kita mau mendefinisikan sebuah query ke dalam database, maka kita akan menuliskan querynya di dalam repository
- \[ ] Di dalam Service Repository Pattern, yang boleh mengakses model hanya Controller saja

#### Q5. Manakah dari kode di bawah ini yang tidak mengembalikan Promise sebagai value?
- \[ ] `async function getUser() {}`
- \[ ] `new Promise()`
- \[x] `function getUser() {}`

#### Q6. Manakah pernyataan di bawah ini yang benar mengenai Asynchronous Process?
- \[ ] Asynchronous Process adalah sebuah proses yang dijalankan di Main Thread
- \[ ] Worker Thread bertugas untuk menerima delegasi proses dari Main Thread
- \[x] Worker Thread akan menerima callback dari Main Thread ketika asynchronous process selesai

#### Q7. Untuk menghandle Promise ketika rejected, method dari Promise manakah yang akan kita gunakan untuk menerima callback dari Rejected Promise tadi?
- \[ ] `.then`
- \[ ] `.finally`
- \[x] `.catch`

#### Q8. Output manakah yang akan pertama kali muncul di dalam kode berikut?

```Javascript
async function getRandomUsername() {
    console.log("Mencari username....")
    return "sabrina"
}

getRandomUsername()
    .then((username) => {
        console.log("Username ketemu!");
        console.log(username);
    })
    .catch((err) => {
        console.log("Username gak ketemu!");
    })
```

- \[ ] Username ketemu
- \[x] Mencari username...
- \[ ] Sabrina


#### Q9. Dari kode di samping ini, apa yang akan terjadi kalau n bernilai 10?

```javascript
const n = 10;

async function generateSequence(n) {
    if (n < 0) throw new Error ("n must be positive");

    const sequence = [];
    for (let i = 1; i <= n; i++) sequence.push(i);

    return sequence;
}

generateSequence(n).then(console.log);
```

- \[x] Akan muncul deret angka dari 1 sampai 10
- \[ ] Terjadi unhandle promise rejection, karena promise tersebut gagal dan tidak dihandle
- \[ ] Tidak terjadi apa-apa


#### Q10. Agar informasi terkait user dapat diakses kembali oleh server setelah login pada sebuah website yang mana dibuat menggunakan View Engine Express, apa yang perlu kita lakukan di dalam implementasi login?
- \[x] melakukan assignment pada session object (req.session) dan buat atribut baru bernama user yang bernilai instance dari model User
- \[ ] Membuat token dan dimasukkan ke dalam JSON Response dengan payload data user yang berupa instance dari model User
- \[ ] Membuat JSON Web Token yang mana akan disimpan sebagai Response Cookie


#### Q11. Apa yang membuat JSON Web Token compatible dengan REST API?
- \[ ] Karena JSON Web Token terenkripsi , maka dari itu kompatibel dengan REST API
- \[x] Karena JSON Web Token bersifat Stateless dan dapat memuat payload yang biasanya berisi data user
- \[ ] Karena JSON Web Token disimpan di dalam sebuah Session di dalam server, jadi server dapat mengingat token tersebut milik siapa


#### Q12. Apa yang terjadi jika sebuah client mencoba melakukan request ke dalam endpoint yang protected pada server yang menggunakan Token Based Authentication, tetapi client tersebut tidak mengirimkan token ke dalam request tersebut?

```javascript
async function authorize(req, res, next) {
	try {
		const bearerToken = req.headers.authorization;
		const token = bearerToken.split("Bearer ")[1];
		const tokenPayload = jwt.verify(
			token,
			process.env.JWT_STRUCTURE_KEY || "Rahasia"
		)
		req.user = await User.findByPk(token.Payload.id);
		next();
	}
	catch(err) {
		res.status(401).json({
			message: "Unauthorized";
		})
	}
}
```

- \[ ] Tidak terjadi apa-apa
- \[ ] Client akan mendapat response 422
- \[x] Client akan mendapat response 401


#### Q13. JSON Web Token, dapat dibuat oleh siapa saja, dan di-decode oleh siapapun, karena sifatnya stateless. Dengan kondisi seperti ini, bagaimaan caranya agar server yakin kalau JSON Web Token yang ia terima benar dan valid dibuat dari server tersebut, untuk mencegah identity fraud?
- \[x] JWT yang dibuat akan selalu diberi signature oleh server
- \[ ] JWT yang dibuat sudah terenkripsi dengan baik
- \[ ] Pernyataan bahwa JWT dapat dibuat oleh siapa saja tidak valid, hanya server yang bisa membuat JWT


#### Q14. Bagaimana cara melakukan logout jika kita menggunakan Session Based Authentication?
- \[x] Kirim request ke server untuk menghapus session dari user 
- \[ ] Hapus Cookie
- \[ ] Reset Browser


#### Q15. Manakah atur OAuth yang benar?
- \[ ] Client - Authorization Server - Resource Server
- \[x] Resource Owner - Authorization Server - Client - Resource Server
- \[ ] Resource Owner - Client - Authorization Server - Client - Resource Server


#### Q16. Mengapa kita perlu menggunakan Open API dalam mendefinisikan sebuah Web API?
- \[ ] Karena Open API sudah distandarisasi, jadi fleksibel untuk semua developer
- \[x] Karena Open API sudah distandarisasi dan dapat dibaca oleh mesin, jadi banyak tools yang bisa kita gunakan
- \[ ] Karena Open API dapat didefinisikan menggunakan YAML 


#### Q17. Agar development front end tidak terhalang oleh ketersediaan dan kesiapan back end, tools apakah yang dapat kita gunakan bersama Open API agar front end bisa melakukan development terlebih dahulu tanpa perlu menunggu backend?
- \[x] Membuat Mock API berdasarkan Open API yang sudah didefinisikan 
- \[ ] Menggunakan Open API sebagai API Contact
- \[ ] Development back end diajukan sebelum mulainya development front end


#### Q18. Di Atribut manakah kita dapat menyimpan definisi response dari sebuah endpoint yang bisa digunakan di multiple endpoint?
- \[ ] components:requestBodies
- \[x] components:reponses
- \[ ] components:schemas


#### Q19. Kenapa kita perlu menambahkan atribute openapi: 3.0.0 di awal dokumen?
- \[ ] Untuk dekorasi
- \[x] Memberitahu pembaca specs tersebut bahwa dokumen ini ditulis dengan versi 3 dari OpenAPI 
- \[ ] Sebagai penentu apakah sebuah dokumen itu ditulis menggunakan Open API


#### Q20. Pada atribut manakah developer akan menyimpan definisi security di dalam Open API 3.0.0 ?
- \[ ] securities
- \[ ] components:securities
- \[x] components:securitySchemas