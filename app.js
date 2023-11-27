const express =  require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main() 
    .then(() => {
        console.log("conected to room");
    }).catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req,res) => {
    res.send("hi  i am pricne");
})

app.listen(8080, () => {
    console.log("port is working done brother !");
});