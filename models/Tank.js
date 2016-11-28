const mongoose = require('mongoose');

const tankSchema = new mongoose.Schema({

});

const Tank = mongoose.model('Tank', tankSchema);

module.exports = Tank;
