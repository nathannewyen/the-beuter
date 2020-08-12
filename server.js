const express = require("express"),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require("cors"),
    port = process.env.PORT || 8000,
    db = "beuter",
    path = require("path"),
    server = app.listen(port, () => console.log(`Listening to on port ${port}`));

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('beuter/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'beuter', 'build', 'index.html'));
    })
}
require("./server/config/database.config")(db);
require("./server/routes/product.route")(app);