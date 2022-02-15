const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new mongoose.Schema({
    users : [
            type: Schema.ObjectId,
            ref: 'User'
    ]
});

const model = mongoose.model('Chat', chatSchema); 
module.exports = model;