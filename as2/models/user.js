var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	username: String,
  email: String,
	password: String,
}),

module.exports = User = mongoose.model("users", userSchema);