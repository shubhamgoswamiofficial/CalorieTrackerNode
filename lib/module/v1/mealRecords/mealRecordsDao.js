const MealRecords = require('./mealRecordsModel');
let BaseDao = new require('../../../dao/baseDao');
const mealRecordsDao = new BaseDao(MealRecords);

function recordMeal(mealInfo) {
    let meal = new MealRecords(mealInfo);
    return mealRecordsDao.save(meal)
}

function editMeal(params) {
    let query = {}
    let update = {}
    let options = {}
    options.new = true
    query._id = params.mealRecordId

    if (params.mealName) {
        update.mealName = params.mealName
    }

    if (params.calories) {
        update.calories = params.calories
    }
    if (params.date) {
        update.date = params.date
    }

    return mealRecordsDao.findOneAndUpdate(query, update, options)
}


function deleteMeal(params) {
    let query = {}
    query._id = params.mealRecordId
    return mealRecordsDao.remove(query)
}


function getMeals(params) {
    let startDate = params.dateFrom;
    let endDate = params.dateTo;

    let query = {}
    query.userId = params.userId
    query.date = { "$gte": (startDate), "$lte": (endDate) };
    
    return MealRecords.find(query).sort({ date: -1 })
}

module.exports = {
    recordMeal,
    editMeal,
    deleteMeal,
    getMeals
}