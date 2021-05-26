const mongoose = require("mongoose");

//new means create a new object
//this is a cookie cutter to be able to use
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    }
});

module.exports = mongoose.model("product", productSchema);