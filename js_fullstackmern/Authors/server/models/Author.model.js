const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    authorName: { type:String,
    required: [true,"Name is required"],
    minLength:[3, "Author name must be 3 or more characters"]
},
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);


module.exports = Author;