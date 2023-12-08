const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    set: function (v) {
      if (typeof v === 'object' && v.url) {
        return v.url;
      }
      return v || "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    },
  },
  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
