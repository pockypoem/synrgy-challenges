# Pre-Test Chapter 08

#### Q1. File konfigurasi .eslinctrc tidak tersedia dalam format...
- \[ ] .yaml
- \[x] .xml
- \[ ] .js

#### Q2. Mode instalasi ESLint yang direkomendasikan adalah...
- \[ ] Instalasi global di env development
- \[x] Instalasi lokal di semua env
- \[ ] Instalasi lokal di env development

#### Q3. ESLint yang dipanggil melalui command line terminal dapat melakukan scanning 2 file sekaligus dengan perintah...
- \[x] $ eslint file1.js file2.js
- \[ ] $ eslint (file1.js, file2.js)
- \[ ] $ eslint file1.js&&file2.js

#### Q4. Salah satu tujuan mengimplementasikan ESLint dalam project Javascript adalah....
- \[ ] Mempercepat proses development 
- \[x] Mengurangi potensi munculnya bug 
- \[ ] Membuat kode menjadi lebih ringkas 

#### Q5. ESLint dapat diintegrasikan dengan toolchain eksternal untuk mempermudah penggunanya. Contoh tools yang dapat diintegrasi dengan ESLint adalah....
- \[x] Code editor dan build tools
- \[ ] Browser dan database
- \[ ] Repository dan API

#### Q6. Manakah flow yang tepat ketika kita menerapkan TDD? 
- \[ ] Ngoding dulu, baru tulis test dan ngejalanin test sampai lolos
- \[x] Tulis test dulu baru, jalanin test, baru ngoding sampe lolos test 
- \[ ] Jalanin test dulu, baru ngoding, baru nulis test

#### Q7. Manakah urutan yang tepat dari test berdasarkan level isolasinya dari terendah sampai tertinggi?
- \[ ] End to End Testing, Integration Testing, Unit Testing
- \[ ] End to End Testing, Unit Testing, Integration Testing
- \[x] Unit Testing, Integration Testing, End to End Testing

#### Q8. Jika kita ingin melakukan Unit Testing terhadap Controller, apakah kita perlu menggunakan Model yang asli untuk kita gunakan sebagai dependensi Controller di dalam test?
- \[ ] Tidak, karena kita tidak akan memanggil model sama sekali
- \[x] Tidak, karena kita cuman peduli possible output dari method model yang kita panggil
- \[ ] Iya, karena controller sangat dependen dengan model.

#### Q9. Di dalam Back End, hal apa saja yang menjadi cakupan dari TDD untuk ditest?
- \[x] Endpoint & Unit
- \[ ] View
- \[ ] Dokumentasi

#### Q10. Proses melakukan setup dan instalasi aplikasi agar bisa diakses oleh pengguna merupakan definisi dari....
- \[ ] SDLC
- \[x] Deployment
- \[ ] Testing

#### Q11. Tujuan dan benefit menggunakan Docker adalah.....
- \[x] Menyederhanakan dan mempercepat alur kerja, sekaligus memberikan kebebasan kepada developer untuk berinovasi dengan alat, techstack, dan deployment environment untuk setiap proyek
- \[ ] Menambah resource agar lebih efisien tanpa harus scaleup
- \[ ] Membagi resource dengan membuat virtual machine

#### Q12. Berikut ini manakah yang merupakan platform untuk menjalankan container?
- \[x] Docker
- \[ ] Kubernetes
- \[ ] Google Kubernetes Engine

#### Q13. Metode penyampaian berbagai layanan melalui internet seperti aplikasi penyimpanan data, server, database, jaringan, dan perangkat lunak, yaitu....
- \[x] Cloud Computing
- \[ ] Server
- \[ ] Database

#### Q14. Perangkat lunak yang dijadikan sebagai layanan yang bersifat online. Termasuk ke dalam jenis cloud....
- \[ ] PaaS 
- \[x] SaaS 
- \[ ] IaaS 

#### Q15. Dalam Environment cycle, QA melakukan testing pada Environment...
- \[ ] Development
- \[x] Staging
- \[ ] Production

#### Q16. Fitur Unggulan dari NGINX adalah...
- \[x] Web server open-source yang berfungsi sebagai reverse proxy, penyeimbang beban HTTP, dan proxy email untuk IMAP, POP3, dan SMTP
- \[ ] Web server berbayar, Low Performance, High resource
- \[ ] Platform Service yang bisa menghandle banyak request

#### Q17. Contoh script yang dipakai untuk CI/CD adalah....
- \[x] .travis-ci.yml
- \[ ] Config.json
- \[ ] .env.production

#### Q18. Berikut yang bukan merupakan manfaat dari CI/CD yaitu....
- \[ ] Mempercepat proses release
- \[ ] Dapat mendeteksi bug lebih awal
- \[x] Meningkatkan performance aplikasi

#### Q19. Apa manfaat dari CI/CD pada Software Development Life Cycle (SDLC)?
- \[ ] Mempermudah dan mempercepat pembuatan code oleh developer maupun designer
- \[ ] Agar team menggunakan teknologi yang terkini
- \[x] Mempermudah dan mempercepat proses deployment dan integrasi code antar team

#### Q20. Perhatikan potongan script .github-nodejs-ci.yml di samping! Pernyataan yang tidak benar terkait setup CI/CD tersebut adalah...
```javascript
name: Node.js CI

on: 
    push:
        branches: ["develop"]
    pull_request:
        branches: ["develop"]
jobs:
    build:
        runs-on: ubuntu-latest
    
        strategy:
            matrix:
                node-version: [12.x, 14.x, 16.x]
                # See supported Node.js release schedule at https://node.js.org/en/about/releases/
```
- \[x] Setup dipakai untuk deploy aplikasi Ruby
- \[ ] Setup hanya dilakukan untuk branch develop
- \[ ] Node version yang digunakan versi 12, 14, 16