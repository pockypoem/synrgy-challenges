const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/cars', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cariMobil.html'));
})


// TODO: akan dijalankan untuk request apapun
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


