const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = process.env.PORT || 8000,
    db = "beuter",
    path = require("path")

app.use(cors());
app.use(express.json());

require("./server/config/database.config")(db);
require("./server/routes/product.route")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('beuter/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname + '/beuter/build/index.html'));
    });
}

app.listen(port, () => console.log(`Listening to on port ${port}`));