const mongoose = require("mongoose");
// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
  id: Number,
  details: {
    firstname: String,
    lastname: String,
    city: String,
    country: String,
  },
  picture: {
    large: String,
    thumbnail: String,
  },
  membership: {
    date_joined: String,
    "last-update": String,
    likes: Number,
  },
  email: String,
  password_bcrypt: String,
  apikey: String,
  favorites: Array,
});
module.exports = mongoose.model("Users", userSchema);
