const mongoose = require('mongoose')

module.exports = mongoose.model('people',{name: String ,age: Number}, 'people');