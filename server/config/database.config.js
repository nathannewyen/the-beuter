const mongoose = require("mongoose");

module.exports = (name) => {
    mongoose
        .connect(process.env.MONGODB_URI || `mongodb://localhost:27017/${name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => console.log(`Successfully connected to ${name}`))
        .catch((err) => console.log(err));
};