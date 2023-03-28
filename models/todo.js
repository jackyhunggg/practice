const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean
    }
})

module.exports = mongoose.module('Todo', todoSchema)