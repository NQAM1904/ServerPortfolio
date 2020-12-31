const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//https://viblo.asia/p/mongoose-cho-mongodb-nodejs-Qbq5QWvJZD8
const CategorySchema = new Schema({
    nameCategory: {
        type: String,

    },
});
const Category = mongoose.model("category", CategorySchema);

module.exports = Category;