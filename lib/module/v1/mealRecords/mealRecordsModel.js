// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../../constant');

var Schema = mongoose.Schema;
var MealRecords;

var MealRecordsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.USER,required: true, index: true },
    mealName: { type: String, index: true },
    calories: { type: Number },
    date: { type: Date, default: Date.now }
},
);

//Export user module
MealRecords = module.exports = mongoose.model(constants.DB_MODEL_REF.MEAL_RECORDS, MealRecordsSchema);


