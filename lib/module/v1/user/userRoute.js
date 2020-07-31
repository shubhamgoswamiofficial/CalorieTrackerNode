const usrRoutr = require("express").Router();
const resHndlr = require("../../../responseHandler");
const middleware = require("../../../middleware");
const userFacade = require("./userFacade");
const validators = require("./userValidator");


usrRoutr.route("/register")
    .post([], function (req, res) {
        let { email, password } = req.body;
        userFacade.register({ email, password })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

usrRoutr.route("/login")
    .post([], function (req, res) {
        let { email, password } = req.body;
        userFacade.login({ email, password })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


module.exports = usrRoutr;
