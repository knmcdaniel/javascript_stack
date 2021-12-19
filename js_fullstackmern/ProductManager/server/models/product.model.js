const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type:String },
    price: { type:String },
    desc: { type:String }
}, {timestamps: true});

module.exports = mongoose.model('Person', ProductSchema);
