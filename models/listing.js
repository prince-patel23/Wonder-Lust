const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: { type: String, default: "image not found" },
  url: { type: String, default: "not set the image" }
});

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: imageSchema, 
  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
