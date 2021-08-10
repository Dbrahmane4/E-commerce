import express from 'express';
import data from './Data.js';
const port = process.env.PORT || 5000;

const app = express();

app.get('/api/product', (req, res) => {
    res.send(data.products)
})
app.get('/', (req, res) => {
    res.send("server is ready");
})

app.listen(port, () => {
    console.log("listening to the server");
})