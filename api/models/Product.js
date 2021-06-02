'use strict'

const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/productDatabase");

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        category: String
    }
);

// productSchema.methods.show = () => {
//     console.log("Product:  ${this.name} description: ${this.description} Price: ${this.price} Category: ${this.category}");
// }

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;