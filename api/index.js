const express = require("express");
const app = express();
require('dotenv').config();
let key = process.env.API_KEY;
let port = Number(process.env.VERCEL_PORT);

// this is the part you will see
app.get("/", (req, res) => {
    
    const url = "https://www.searchapi.io/api/v1/search";
    const params = new URLSearchParams({
        "engine": "google",
        "q": `${req.query.first} ${req.query.last} injury status`,
        "api_key": `${process.env.API_KEY}`
    });

    fetch(`${url}?${params}`)
    .then(response => response.json())
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

app.listen(port, () => console.log(`Your express server deployed on vercel is listening on port ${port}`));

module.exports = app;