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
        required: true,
    },
    description2: {
        type: String,
    },
    description3: {
        type: String,
    },
    description4: {
        type: String,
    },
    img_url1: {
        type: String,
        required: true,
    },
    img_url2: {
        type: String,
        required: true,
    },
    img_url3: {
        type: String,
        required: true,
    },
    img_url4: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    fit: {
        type: String,
    },
    size2: {
        type: String,
    },
    fit2: {
        type: String,
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = {
    Product: mongoose.model("Product", ProductSchema),
};