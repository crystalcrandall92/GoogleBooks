const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Dropping required as it causes error to occur in saving book to database
const bookSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;