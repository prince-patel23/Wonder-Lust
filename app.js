const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../wonderlust/models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to MongoDB");
    }).catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res) => {
    res.send("hi, I am prince");
});


app.listen(8080, () => {
    console.log("Server is running on port 8080!");
});
