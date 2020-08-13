const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = process.env.PORT || 8000,
    db = "beuter",
    path = require("path"),
    server = app.listen(port, () => console.log(`Listening to on port ${port}`));

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'beuter/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/beuter/build/index.html'));
});

require("./server/config/database.config")(db);
require("./server/routes/product.route")(app);