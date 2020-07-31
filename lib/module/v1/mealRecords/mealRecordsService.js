const mealRecordsDao = require('./mealRecordsDao');


function recordMeal(params) {
    return mealRecordsDao.recordMeal(params)
}
function editMeal(params) {
    return mealRecordsDao.editMeal(params)
}
function deleteMeal(params) {
    return mealRecordsDao.deleteMeal(params)
}
function getMeals(params) {
    return mealRecordsDao.getMeals(params)
}
module.exports = {
    recordMeal,
    editMeal,
    deleteMeal,
    getMeals
}