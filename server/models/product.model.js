const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A product must have a title"],
    },
    title_url: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least $1"],
    },
    description1: {
        type: String,
        required: [true, "Please descript your product."],
    },
    description2: {
        type: String,
        required: [true, "Please descript your product."],
    },
    description3: {
        type: String,
        required: [true, "Please descript your product."],
    },
    img_url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = {
    Product: mongoose.model("Product", ProductSchema),
};