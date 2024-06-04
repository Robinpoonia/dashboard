const express = require('express');
const dotenv = require("dotenv");
const db =require('./config/mangodb');
// Load environment variables from .env file
dotenv.config();
db.connect();
// Setting up port number
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
})

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
