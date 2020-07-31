const mealRecordsService = require('./mealRecordsService');


function recordMeal(params) {
    return mealRecordsService.recordMeal(params)
        .then(result => {
            return {message:"Meal recorded Successfully!", result}
        })
}

function editMeal(params) {
    return mealRecordsService.editMeal(params)
        .then(result => {
            return {message:"Meal edited Successfully!", result}
        })
}

function deleteMeal(params) {
    return mealRecordsService.deleteMeal(params)
        .then(result => {
            return {message:"Meal deleted Successfully!", result}
        })
}

function getMeals(params) {
    return mealRecordsService.getMeals(params)
        .then(result => {
            return {message:"Meals!", result}
        })
}

module.exports = {
    recordMeal,
    editMeal,
    deleteMeal,
    getMeals
}