const express = require('express')
const app = express()
const port = 5000

app.get('/', (_req, res) => {
    res.send('Default route...');
});

app.get('/protected', (_req, res) => {
    res.send('Protected route...');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})