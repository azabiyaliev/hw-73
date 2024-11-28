const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
   return res.send('Welcome to the Tasks');
});

app.get('/:echo', (req, res) => {
    return res.send(`${req.params.echo}`);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})