const product = require("../controllers/product.controller");
var path = require("path");

module.exports = (app) => {

    app.get("/api/products", product.index);

    // Create a product
    app.post("/api/products", product.create);

    // Get one product by title_url
    app.get("/api/products/:title_url", product.show_title_url)

    // Delete a product
    app.delete("/api/products/:id", product.deleteProduct)

    //Edit a product
    app.put("/api/products/:id", product.update)

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'beuter', 'build', 'index.html'));
    })
};