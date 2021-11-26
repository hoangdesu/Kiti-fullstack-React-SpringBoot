const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());



app.get('/api/products/add', (req, res) => {
    res.send('hi');
});


app.get('/test', (req, res) => {
    res.send({'name': 'test'});
    // res.send('test hehe');
});


app.listen(8080, () => {});