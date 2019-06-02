const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express()

app.get('/api/v1/phishTour', (req, res) => res.send('Hello Phish!'))

app.listen(PORT, () => console.log(`App running!`))