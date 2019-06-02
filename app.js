const express = require('express')
const morgan = require("morgan");
const dbConnection = require('./connection')
const PORT = process.env.PORT || 3000;
const app = express()

app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));

app.get('/api/v1/phishTour', (req, res) => {
  dbConnection("phishTour")
    .select("*")
    .then(tour => res.status(200).json(tour))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.get("/api/v1/phishTour/:id", (req, res) => {
  dbConnection("phishTour")
    .select("*")
    .limit(1)
    .where({ id: req.params.id })
    .then(tour => res.status(200).json(tour))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.listen(PORT, () => console.log(`App running!`));