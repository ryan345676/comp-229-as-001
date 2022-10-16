var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new mongoose.Schema( {
	contactName: String,
    contactNumber: String,
    contactEmail: String
});

var businessModel = mongoose.model('business', businessSchema);
module.exports = businessModel;