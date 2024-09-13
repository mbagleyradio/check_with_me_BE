const express = require("express");
const app = express();

// this is the part you will see
app.get("/", (req, res) => {
    res.send("This is the root route for GET requests on this server") });

app.listen(5000, () => console.log("Your express server deployed on vercel is listening on port 5000"));

module.exports = app;