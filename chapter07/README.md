# Pre-Test Chapter 07

#### Q1. Manakah pernyataan yang benar tentang paradigma client-server architecture?
- \[ ] Front-end dan back-end beda server
- \[ ] Front-end dan back-end ada di satu server
- \[x] Hanya back-end yang memiliki server, front end tidak berjalan di server

#### Q2. Berikut ini pernyataan yang benar mengenai SPA adalah...
- \[x] Client cuman mendownload 1 file HTML dan UI akan didefinisikan oleh Javascript
- \[ ] Client akan mendownload file HTML di setiap halaman yang diakses
- \[ ] Client tidak melakukan memanipulasi UI, melainkan hanya menerima HTML yang sudah diolah oleh server

#### Q3. Manakah Opsi di bawah ini yang digunakan untuk mengimport CSS secara global?
- \[ ] `Import { style } from './Style.css`
- \[x] `Import './Style.css`
- \[ ] `Import './Style.partial.css`

#### Q4. Code berikut akan menghasilkan error karena... <br>
```javascript
export default function Tombol() {
    return (
        <button>Tombol A</button>
        <button>Tombol B</button>
    )
}
```
- \[ ] Seharusnya export default diletakkan di akhir
- \[ ] Seharusnya ada method render()
- \[x] Seharusnya ada satu tag yang membungkus tag lainnya

#### Q5. Di bawah ini manakah yang termasuk dalam Component di React?
- \[ ] `<Header />`
- \[ ] `<h1 />`
- \[ ] `<button />`

#### Q6. Library yang menyediakan berbagai React Component secara langsung disebut dengan...
- \[x] UI Framework
- \[ ] CSS Framework
- \[ ] Component Framework

#### Q7. Untuk membuat project menggunakan CRA, package apa yang perlu kita install sebagai global module di Node.js?
- \[ ] Vite-app
- \[x] Create-react-app
- \[ ] Create-react-app-rewireda

#### Q8. Manakah dari opsi di bawah ini yang benar mengenai Client Side Rendering?
- \[x] HTML dirender oleh Javascript di dalam browser
- \[ ] HTML dirender oleh Server
- \[ ] HTML dirender oleh Browser dan Server

#### Q9. Dari code berikut, apa yang akan terjadi kalau button tersebut di-click oleh user?

```javascript
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <button>{count}</button>
    )
}
```

- \[x] Tidak terjadi apa-apa
- \[ ] Nilai count akan bertambah 1
- \[ ] Error

#### Q10. Dari pernyataan di bawah ini, manakah contoh kecil OAuth di kehidupan nyata?
- \[x] Seorang pemilik mobil menitipkan kunci ke Valet Parking agar memarkirkan
- \[ ] Seorang ibu meminta anaknya berbelanja ke pasar
- \[ ] Pak Pos mengantarkan surat ke dalam kotak surat di depan rumah alamat tujuan

#### Q11. Menurutmu manakah yang merupakan bagian dari OAuth Actors?
- \[x] Client
- \[ ] Resource Owner
- \[ ] API Owner

#### Q12. Dari pernyataan di bawah ini, manakah yang merupakan alur dari OAuth?
- \[ ] Aplikasi meminta otorisasi dari pengguna
- \[x] Pengguna mengotorisasi aplikasi dan mengirimkan bukti
- \[ ] Aplikasi dan Pengguna mendapat token otorisasi

#### Q13. Manakah alur OAuth yang benar?
- \[ ] Client - Authorization Server - Resource Server
- \[ ] Resource Owner - Authorization Server - Client - Resource Server
- \[x] Resource Owner - Client - Authorization Server - Client - Resource Server

#### Q14. Apa kegunaan React Context?
- \[ ] Untuk memanage UI Component dari aplikasi React
- \[x] Untuk memanage state dari sebuah aplikasi
- \[ ] Untuk melakukan HTTP Request ke Server

#### Q15. Fungsi dari Context Provider adalah....
- \[ ] Memastikan kelancaran alur logika dalam algoritma sorting pada data
- \[x] Sebagai cara untuk mengkonsumsi Context
- \[ ] Menjalankan proses otomatisasi dalam sistem operasi

#### Q16. Library manakah yang berfungsi sebagai middleware ketika menghandle data yang asynchronous di Redux?
- \[ ] react-redux
- \[x] react-thunk
- \[ ] redux

#### Q17. Bagaimana cara membuat Context Provider?
- \[x] `const context = createContext();`
- \[ ] `const context = useContext();`
- \[ ] `const context = defineContext();`

#### Q18. Berikut ini yang bukan merupakan kelebihan menggunakan Typescript dan React adalah...
- \[ ] Error dan bug bisa terdeteksi lebih awal
- \[x] Penulisan kode lebih sederhana karena hanya perlu menambahkan type
- \[ ] Component lebih mudah dibaca dan dipahami

#### Q19. Contoh penulisan props yang benar yang benar menggunakan Typescript adalah...
- \[ ] Opsi A 
```javascript
import React from 'react';

export default function MyComponent({ message }) {
    return (
        <>{message}</>
    )
}
```

- \[ ] Opsi B
```javascript
import React from 'react';

const message = string

export default function MyComponent({ message }) {
    return (
        <>{message}</>
    )
}
```

- \[x] Opsi C
```javascript
import React from 'react';

type ComponentProps = {
    message: string
}

export default function MyComponent({ message } : ComponentProps) {
    return (
        <>{message}</>
    )
}
```

#### Q20. Apakah kemungkinan yang akan terjadi ketika deklarasi state tidak memberi spesifik type ketike menggunakan Typescript?
- \[ ] Akan terjadi error
- \[x] Akan berjalan namun akan ada warning linter
- \[ ] Aplikasi akan crash