const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = process.env.PORT || 8000,
    db = "beuter",
    path = require("path"),
    server = app.listen(port, () => console.log(`Listening to on port ${port}`));

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => { // don't serve react app to api routes
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};
require("./server/config/database.config")(db);
require("./server/routes/product.route")(app);