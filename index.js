const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/home', (req, res) => {
    res.json({message: 'OK'});
});

app.listen(process.env.PORT, () => {
    console.log("started the server");
});