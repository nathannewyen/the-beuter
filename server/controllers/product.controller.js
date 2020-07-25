const {
    Product
} = require("../models/product.model");

module.exports = {
    index(req, res) {
        Product.find()
            .then((allProducts) => res.json(allProducts))
            .catch((err) => res.json(err));
    },

    create(req, res) {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => res.json(err));
    },

    show_title_url(req, res) {
        Product.findOne({
                title_url: req.params.title_url
            })
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    },

    update(req, res) {
        Product.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                runValidators: true
            })
            .then(editProduct => res.json({
                msg: "Success"
            }))
            .catch(err => res.json(err))
    },


    deleteProduct(req, res) {
        Product.deleteOne({
                _id: req.params.id
            })
            .then(msg => res.json(msg))
            .catch(err => res.json(err))
    }
};