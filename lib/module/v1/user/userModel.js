// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../../constant');

var Schema = mongoose.Schema;
var User;

var UserSchema = new Schema({
    email: { type: String, index: true, unique: true },
    password: { type: String },
    created: { type: Date, default: Date.now }
},
);

//Export user module
User = module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);


