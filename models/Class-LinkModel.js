const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: String,
    click: {type: Number, default:0}
})

module.exports = mongoose.model('LinkModel', linkSchema);