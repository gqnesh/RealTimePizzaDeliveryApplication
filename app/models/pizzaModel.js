const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true }
}, { timestamps: true });

// compiling pizzaSchema and creating model
const Menu = mongoose.model("Menu", MenuSchema);


module.exports = Menu;