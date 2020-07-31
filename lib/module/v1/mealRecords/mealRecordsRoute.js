const mealRecordRoutr = require("express").Router();
const resHndlr = require("../../../responseHandler");
const middleware = require("../../../middleware");
const mealRecordsFacade = require("./mealRecordsFacade");


mealRecordRoutr.route("/recordMeal")
    .post([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { mealName, calories, date } = req.body;
        mealRecordsFacade.recordMeal({ userId, mealName, calories, date })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


mealRecordRoutr.route("/editMeal")
    .post([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { mealName, calories, date, mealRecordId } = req.body;
        mealRecordsFacade.editMeal({ userId, mealRecordId, mealName, calories, date })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


mealRecordRoutr.route("/deleteMeal")
    .post([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { mealRecordId } = req.body;
        mealRecordsFacade.deleteMeal({ userId, mealRecordId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


mealRecordRoutr.route("/getMeals")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { dateFrom, dateTo } = req.query;
        
        mealRecordsFacade.getMeals({ userId,  dateFrom, dateTo })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


module.exports = mealRecordRoutr;
