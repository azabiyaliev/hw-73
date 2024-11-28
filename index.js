const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

const password = "password";

app.get('/', (req, res) => {
   return res.send('Welcome to the Tasks');
});

app.get('/:echo', (req, res) => {
    return res.send(`${req.params.echo}`);
})

app.get(`/encode/:encode` , (req, res) => {
    return res.send(Vigenere.Cipher(password).crypt(req.params.code));
})

app.get(`/decode/:decode`, (req, res) => {
    return res.send(Vigenere.Decipher(password).crypt(req.params.decode));
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})